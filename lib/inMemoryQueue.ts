// lib/inMemoryQueue.ts
import { sendEmail } from "./sendEmail";

interface QueueJob {
  id: string;
  formData: any;
  formType: string;
  attempts: number;
  createdAt: Date;
}

class InMemoryEmailQueue {
  private queue: QueueJob[] = [];
  private processing: boolean = false;
  private readonly maxRetries: number = 3;

  /**
   * Add a job to the queue
   */
  async add(
    jobName: string,
    data: { formData: any; formType: string }
  ): Promise<void> {
    const job: QueueJob = {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      formData: data.formData,
      formType: data.formType,
      attempts: 0,
      createdAt: new Date(),
    };

    this.queue.push(job);
    // console.log(`Job added to queue: ${job.id} (${data.formType})`);

    // Start processing if not already processing
    if (!this.processing) {
      this.processQueue();
    }
  }

  /**
   * Process jobs sequentially from the queue
   */
  private async processQueue(): Promise<void> {
    if (this.processing || this.queue.length === 0) {
      return;
    }

    this.processing = true;

    while (this.queue.length > 0) {
      const job = this.queue.shift();
      if (!job) {
        break;
      }

      try {
        // console.log(
        //   `Processing job: ${job.id} (${job.formType}) - Attempt ${
        //     job.attempts + 1
        //   }/${this.maxRetries + 1}`
        // );

        const result = await sendEmail(job.formData, job.formType);

        if (result.success) {
          console.log(
            `Email sent successfully for ${job.formType} form (Job ID: ${job.id})`
          );
        } else {
          // Retry logic
          job.attempts += 1;

          if (job.attempts <= this.maxRetries) {
            console.warn(
              `Email sending failed for ${job.formType} form (Job ID: ${job.id}). Retrying... (Attempt ${job.attempts}/${this.maxRetries})`
            );
            console.error(`Error: ${result.message}`);

            // Requeue the job
            this.queue.unshift(job);

            // Add a small delay before retry (exponential backoff)
            await this.delay(
              Math.min(1000 * Math.pow(2, job.attempts - 1), 10000)
            );
          } else {
            // Max retries reached, log failure
            console.error(
              `Email job failed after ${this.maxRetries} retries (Job ID: ${job.id}, Form Type: ${job.formType})`
            );
            console.error(`Final error: ${result.message}`);
            console.error(`Job data:`, {
              formType: job.formType,
              attempts: job.attempts,
              createdAt: job.createdAt,
            });
          }
        }
      } catch (error: any) {
        // Handle unexpected errors
        job.attempts += 1;

        if (job.attempts <= this.maxRetries) {
          console.error(
            `Unexpected error processing job ${job.id} (${job.formType}). Retrying... (Attempt ${job.attempts}/${this.maxRetries})`
          );
          console.error(`Error:`, error);

          // Requeue the job
          this.queue.unshift(job);

          // Add a small delay before retry
          await this.delay(
            Math.min(1000 * Math.pow(2, job.attempts - 1), 10000)
          );
        } else {
          // Max retries reached
          console.error(
            `Email job failed after ${this.maxRetries} retries due to unexpected error (Job ID: ${job.id}, Form Type: ${job.formType})`
          );
          console.error(`Final error:`, error);
          console.error(`Job data:`, {
            formType: job.formType,
            attempts: job.attempts,
            createdAt: job.createdAt,
          });
        }
      }

      // Small delay between jobs to prevent overwhelming the system
      if (this.queue.length > 0) {
        await this.delay(100);
      }
    }

    this.processing = false;
  }

  /**
   * Helper function to add delay
   */
  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  /**
   * Get queue status (for monitoring/debugging)
   */
  getStatus(): { queueLength: number; processing: boolean } {
    return {
      queueLength: this.queue.length,
      processing: this.processing,
    };
  }
}

// Export a singleton instance
export const emailQueue = new InMemoryEmailQueue();
