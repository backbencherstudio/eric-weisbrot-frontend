import { emailQueue } from '@/lib/queue'; // Import the email queue
import { ContactForm, DocumentUploadForm, MessageForm } from '@/lib/types';

export async function POST(req: Request) {
  const { formType, formData }: { formType: string, formData: ContactForm | DocumentUploadForm | MessageForm } = await req.json();

  const validFormTypes = ['contact', 'documentUpload', 'message'];
  if (!validFormTypes.includes(formType)) {
    return new Response(JSON.stringify({ success: false, message: 'Invalid form type' }), { status: 400 });
  }

  try {
    // Add email task to the queue
    await emailQueue.add('sendEmail', {
      formData,
      formType,
    });

    return new Response(JSON.stringify({ success: true, message: 'Form submitted and email task queued' }), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ success: false, message: error.message }), { status: 500 });
  }
}



