import { AppointmentForm, ContactForm, DocumentUploadForm, MessageForm } from '@/lib/types';
import { sendEmail } from '@/lib/sendEmail';

export async function POST(req: Request) {
  const { formType, formData }: { formType: string, formData: ContactForm | DocumentUploadForm | MessageForm | AppointmentForm } = await req.json();

  const validFormTypes = ['contact', 'documentUpload', 'message', 'appointment'];
  if (!validFormTypes.includes(formType)) {
    return new Response(JSON.stringify({ success: false, message: 'Invalid form type' }), { status: 400 });
  }

  // console.log('formData', formData, formType)

  try {
    const result = await sendEmail(formData, formType);

    if (!result.success) {
      return new Response(JSON.stringify({ success: false, message: result.message }), { status: 500 });
    }

    return new Response(JSON.stringify({ success: true, message: 'Form submitted and email sent' }), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ success: false, message: error.message }), { status: 500 });
  }
}



