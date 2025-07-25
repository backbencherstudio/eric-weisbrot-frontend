// import nodemailer from 'nodemailer';
// import { generateEmailTemplate } from './emailTemplate';

// const gmailUser = process.env.GMAIL_USER;
// const gmailPassword = process.env.GMAIL_PASSWORD;

// export async function sendEmail(formData: any, formType: string) {
//   const emailTemplate = generateEmailTemplate(formData, formType);

//   // Create a transporter using Gmail's SMTP
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: gmailUser, // Use your email
//       pass: gmailPassword, // Use App Passwords for Gmail if 2FA is enabled
//     },
//   });

//   const mailOptions = {
//     from: gmailUser,
//     to: gmailUser, // This could be the user's email or an admin's email
//     subject: `${formType} Form Submission`,
//     html: emailTemplate,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     return { success: true, message: 'Email sent successfully' };
//   } catch (error: any) {
//     return { success: false, message: error.message };
//   }
// }


// lib/sendEmail.ts
import nodemailer from 'nodemailer';
import path from 'path';
import fs from 'fs'; // For file handling
import { generateEmailTemplate } from './emailTemplate';


const gmailUser = process.env.GMAIL_USER;
const gmailPassword = process.env.GMAIL_PASSWORD;

export async function sendEmail(formData: any, formType: string) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: gmailUser,
      pass: gmailPassword,
    },
  });

  let subject = '';
  if(formType === 'contact'){
    subject = 'Free Consultation Form Submission';
  } else if(formType === 'message'){
    subject = 'Contact Form Submission';
  } else if(formType === 'documentUpload'){
    subject = 'Referral Form Submission';
  }
  const mailOptions: any = {
    from: gmailUser,
    to: gmailUser, // You can customize this to send the email to the admin
    subject: subject,
    html: generateEmailTemplate(formData, formType),
  };

  // If the form type is documentUpload, attach the file
  if (formType === 'documentUpload' && formData.documents) {
    mailOptions.attachments = [
      {
        filename: formData.documents.originalname, // Get original file name
        path: formData.documents.path, // Path to the uploaded file
      },
    ];
  }

  try {
    await transporter.sendMail(mailOptions);
     // If the email was sent successfully, delete the file
     if (formType === 'documentUpload' && formData.documents) {
        fs.unlink(formData.documents.path, (err) => {
          if (err) {
            console.error('Error deleting the file:', err);
          } else {
            console.log(`File ${formData.documents.path} deleted successfully.`);
          }
        });
      }
    return { success: true, message: 'Email sent successfully' };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
}
