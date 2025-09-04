// lib/queue.ts
import { Queue, Worker } from 'bullmq';
import { sendEmail } from './sendEmail'; // Import your email sending logic

const host = process.env.REDIS_HOST || 'localhost';
const port = Number(process.env.REDIS_PORT) || 6379;
const password = process.env.REDIS_PASSWORD || '';

// Create a BullMQ queue for email tasks
const emailQueue = new Queue('emailQueue', {
  connection: {
    host: host,
    port: port, // Redis connection settings
    password,
  },
});

// Create a scheduler to manage the job failures, retries, etc.
const emailQueueScheduler = new Queue('emailQueue', {
  connection: {
    // host: 'localhost',
    // port: 6379,
    host: host,
    port: port, // Redis connection settings
    password,
  },
});

// Create a worker to process jobs from the queue
const emailWorker = new Worker(
  'emailQueue',
  async (job) => {
    const { formData, formType } = job.data;

    // Send the email using the sendEmail function
    const result = await sendEmail(formData, formType);

    if (result.success) {
      console.log(`Email sent successfully for ${formType} form.`);
    } else {
      console.error(
        `Error sending email for ${formType} form:`,
        result.message,
      );
    }
  },
  {
    connection: {
      // host: 'localhost',
      // port: 6379,
      host: host,
      port: port, // Redis connection settings
      password,
    },
  },
);

export { emailQueue, emailQueueScheduler, emailWorker };
