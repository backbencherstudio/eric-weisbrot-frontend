// lib/emailTemplate.ts
import { AppointmentForm, ContactForm, DocumentUploadForm, MessageForm } from './types';

const esc = (v: any) =>
  String(v ?? '').replace(/[&<>"']/g, s =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[s]!)
  );

const show = (v: any, fallback = '—') =>
  (v !== undefined && v !== null && String(v).trim() !== '') ? esc(v) : fallback;

export function generateEmailTemplate(formData: ContactForm | DocumentUploadForm | MessageForm | AppointmentForm, formType: string): string {

  // console.log('from generate => ', formData, formType)
  if (formType === 'contact') {
    const contactFormData = formData as ContactForm; // Narrow to ContactForm type
    return `
    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif;">
      <tr>
        <td bgcolor="#4f46e5" style="padding: 20px; border-radius: 6px 6px 0 0; color: #ffffff; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">Free Consultation Request</h1>
        </td>
      </tr>
      <tr>
        <td bgcolor="#f9fafb" style="padding: 20px;">
          <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td bgcolor="#ffffff" style="padding: 20px; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                <h2 style="margin-top: 0; color: #4f46e5;">Contact Details</h2>
                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td width="120" style="color: #6b7280; padding: 8px 0;"><strong>Name:</strong></td>
                    <td style="padding: 8px 0;">${contactFormData.name}</td>
                  </tr>
                  <tr>
                    <td width="120" style="color: #6b7280; padding: 8px 0;"><strong>Phone:</strong></td>
                    <td style="padding: 8px 0;">${contactFormData.phone}</td>
                  </tr>
                  <tr>
                    <td width="120" style="color: #6b7280; padding: 8px 0;"><strong>Service:</strong></td>
                    <td style="padding: 8px 0;">${contactFormData.service}</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="text-align: center; padding-top: 20px; color: #9ca3af; font-size: 14px;">
                <p style="margin: 0;">This email was generated automatically from your website contact form.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  `;
  }

  if (formType === 'documentUpload') {
    const documentUploadFormData = formData as DocumentUploadForm; // Narrow to DocumentUploadForm type
    return `
    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif;">
      <tr>
        <td bgcolor="#4f46e5" style="padding: 20px; border-radius: 6px 6px 0 0; color: #ffffff; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">New Document Submission</h1>
        </td>
      </tr>
      <tr>
        <td bgcolor="#f9fafb" style="padding: 20px;">
          <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td bgcolor="#ffffff" style="padding: 20px; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); margin-bottom: 15px;">
                <h2 style="margin-top: 0; color: #4f46e5;">User Information</h2>
                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td width="120" style="color: #6b7280; padding: 8px 0;"><strong>First Name:</strong></td>
                    <td style="padding: 8px 0;">${documentUploadFormData.firstName}</td>
                  </tr>
                  <tr>
                    <td width="120" style="color: #6b7280; padding: 8px 0;"><strong>Last Name:</strong></td>
                    <td style="padding: 8px 0;">${documentUploadFormData.lastName}</td>
                  </tr>
                  <tr>
                    <td width="120" style="color: #6b7280; padding: 8px 0;"><strong>Email:</strong></td>
                    <td style="padding: 8px 0;">${documentUploadFormData.email}</td>
                  </tr>
                  <tr>
                    <td width="120" style="color: #6b7280; padding: 8px 0;"><strong>Phone:</strong></td>
                    <td style="padding: 8px 0;">${documentUploadFormData.phone}</td>
                  </tr>
                </table>
              </td>
            </tr>
            ${documentUploadFormData.documents ? `
            <tr>
              <td bgcolor="#ffffff" style="padding: 20px; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); margin-bottom: 15px;">
                <h2 style="margin-top: 0; color: #4f46e5;">Uploaded Documents</h2>
                <p style="margin: 8px 0; padding: 10px; background: #f3f4f6; border-radius: 4px;">
                  📄 ${documentUploadFormData.documents.name}
                </p>
              </td>
            </tr>
            ` : ''}
            <tr>
              <td style="text-align: center; padding-top: 20px; color: #9ca3af; font-size: 14px;">
                <p style="margin: 0;">Please review the attached documents at your earliest convenience.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  `;
  }

  if (formType === 'message') {
    const messageFormData = formData as MessageForm; // Narrow to MessageForm type
    return `
    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif;">
      <tr>
        <td bgcolor="#6366f1" style="padding: 20px; border-radius: 6px 6px 0 0; color: #ffffff; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">New Message Received</h1>
        </td>
      </tr>
      <tr>
        <td bgcolor="#f9fafb" style="padding: 20px;">
          <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td bgcolor="#ffffff" style="padding: 20px; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); margin-bottom: 15px;">
                <h2 style="margin-top: 0; color: #4f46e5;">Sender Details</h2>
                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td width="120" style="color: #6b7280; padding: 8px 0;"><strong>Name:</strong></td>
                    <td style="padding: 8px 0;">${messageFormData.firstName} ${messageFormData.lastName}</td>
                  </tr>
                  <tr>
                    <td width="120" style="color: #6b7280; padding: 8px 0;"><strong>Email:</strong></td>
                    <td style="padding: 8px 0;">${messageFormData.email}</td>
                  </tr>
                  <tr>
                    <td width="120" style="color: #6b7280; padding: 8px 0;"><strong>Phone:</strong></td>
                    <td style="padding: 8px 0;">${messageFormData.phone}</td>
                  </tr>
                  <tr>
                    <td width="120" style="color: #6b7280; padding: 8px 0;"><strong>Source:</strong></td>
                    <td style="padding: 8px 0;">${messageFormData.source}</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td bgcolor="#ffffff" style="padding: 20px; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); margin-bottom: 15px;">
                <h2 style="margin-top: 0; color: #4f46e5;">Message Content</h2>
                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td width="120" style="color: #6b7280; padding: 8px 0;"><strong>I am a/an:</strong></td>
                    <td style="padding: 8px 0;">${messageFormData.subject}</td>
                  </tr>
                </table>
                <div style="margin-top: 15px; padding: 15px; background: #f8fafc; border-left: 3px solid #4f46e5;">
                  <p style="margin: 0; font-style: italic;">${messageFormData.message}</p>
                </div>
              </td>
            </tr>
            <tr>
              <td style="text-align: center; padding-top: 20px; color: #9ca3af; font-size: 14px;">
                <p style="margin: 0;">Please respond to this inquiry within 24 hours.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  `;
  }

  // ---------- NEW: APPOINTMENT ----------
  if (formType === 'appointment') {
    const a = formData as AppointmentForm;
    return `
    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width:700px;margin:0 auto;font-family:Arial,sans-serif;">
      <tr>
        <td bgcolor="#4f46e5" style="padding:22px;border-radius:6px 6px 0 0;color:#ffffff;text-align:center;">
          <h1 style="margin:0;font-size:24px;">Request an Appointment</h1>
          <p style="margin:6px 0 0;font-size:13px;opacity:.9;">A new lead just submitted the appointment form.</p>
        </td>
      </tr>
      <tr>
        <td bgcolor="#f9fafb" style="padding:22px;">
          <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border-collapse:separate;border-spacing:0 14px;">
            <tr>
              <td bgcolor="#ffffff" style="padding:20px;border-radius:6px;box-shadow:0 1px 3px rgba(0,0,0,.08);">
                <h2 style="margin:0 0 10px;color:#4f46e5;">Patient Details</h2>
                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr><td width="180" style="color:#6b7280;padding:8px 0;"><strong>Patient Name:</strong></td><td style="padding:8px 0;">${esc(a.firstName)} ${esc(a.lastName)}</td></tr>
                  <tr><td width="180" style="color:#6b7280;padding:8px 0;"><strong>Phone:</strong></td><td style="padding:8px 0;">${esc(a.phone)}</td></tr>
                  <tr><td width="180" style="color:#6b7280;padding:8px 0;"><strong>Email:</strong></td><td style="padding:8px 0;">${esc(a.email)}</td></tr>

                  <tr><td width="180" style="color:#6b7280;padding:8px 0;"><strong>Date of Birth:</strong></td><td style="padding:8px 0;">${show(a.dateOfBirth)}</td></tr>
                </table>
              </td>
            </tr>

            <tr>
              <td bgcolor="#ffffff" style="padding:20px;border-radius:6px;box-shadow:0 1px 3px rgba(0,0,0,.08);">
                <h2 style="margin:0 0 10px;color:#4f46e5;">Clinical Information</h2>
                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr><td width="180" style="color:#6b7280;padding:8px 0;"><strong>Prescribed Therapy:</strong></td><td style="padding:8px 0;">${show(a.therapies)}</td></tr>
                  <tr><td width="180" style="color:#6b7280;padding:8px 0;"><strong>Condition:</strong></td><td style="padding:8px 0;">${show(a.conditions)}</td></tr>
                </table>
              </td>
            </tr>

            <tr>
              <td bgcolor="#ffffff" style="padding:20px;border-radius:6px;box-shadow:0 1px 3px rgba(0,0,0,.08);">
                <h2 style="margin:0 0 10px;color:#4f46e5;">Marketing Source</h2>
                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr><td width="180" style="color:#6b7280;padding:8px 0;"><strong>How did you hear about us?</strong></td><td style="padding:8px 0;">${show(a.source)}</td></tr>
                </table>
              </td>
            </tr>

            <tr>
              <td bgcolor="#ffffff" style="padding:20px;border-radius:6px;box-shadow:0 1px 3px rgba(0,0,0,.08);">
                <h2 style="margin:0 0 10px;color:#4f46e5;">Additional Comments</h2>
                <div style="margin-top:6px;padding:14px;background:#f8fafc;border-left:3px solid #4f46e5;">
                  <p style="margin:0;white-space:pre-wrap;">${show(a.message)}</p>
                </div>
              </td>
            </tr>

            <tr>
              <td style="text-align:center;padding-top:10px;color:#9ca3af;font-size:13px;">
                <p style="margin:0;">This email was generated from the “Request an Appointment” form.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>`;
  }

  return '';
}


// <p><strong>Uploaded Documents:</strong> ${documentUploadFormData.documents ? documentUploadFormData.documents.name : 'No documents uploaded'}</p>
//  <!--   <tr><td width="180" style="color:#6b7280;padding:8px 0;"><strong>State:</strong></td><td style="padding:8px 0;">${show(a.state)}</td></tr> -->