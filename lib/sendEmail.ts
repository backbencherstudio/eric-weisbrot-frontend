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
import nodemailer from "nodemailer";
import fs from "fs"; // For file handling
import { generateEmailTemplate } from "./emailTemplate";

const gmailUser = process.env.GMAIL_USER;
const gmailPassword = process.env.GMAIL_PASSWORD;
const sendMailId = process.env.SEND_MAIL_ID;

export async function sendEmail(formData: any, formType: string) {
  console.log("formData", formData, formType);
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailPassword,
    },
  });

  let subject = "";
  if (formType === "contact") {
    subject = "Free Consultation Form Submission";
  } else if (formType === "message") {
    subject = "Contact Form Submission";
  } else if (formType === "documentUpload") {
    subject = "Referral Form Submission";
  } else if (formType === "appointment") {
    subject = "Appointment Form Submission";
  }
  const mailOptions: any = {
    from: gmailUser,
    to: sendMailId, // You can customize this to send the email to the admin
    subject: subject,
    html: generateEmailTemplate(formData, formType),
  };

  // If the form type is documentUpload, attach the file
  if (formType === "documentUpload" && formData.documents) {
    const attachment: any = {
      filename: formData.documents.originalname || formData.documents.name,
    };

    if (formData.documents.buffer) {
      attachment.content = formData.documents.buffer;
      if (formData.documents.mimetype) {
        attachment.contentType = formData.documents.mimetype;
      }
    } else if (formData.documents.path) {
      attachment.path = formData.documents.path;
    }

    mailOptions.attachments = [attachment];
  }

  try {
    await transporter.sendMail(mailOptions);
    // If the email was sent successfully, delete the file
    if (
      formType === "documentUpload" &&
      formData.documents &&
      formData.documents.path
    ) {
      fs.unlink(formData.documents.path, (err) => {
        if (err) {
          console.error("Error deleting the file:", err);
        } else {
          console.log(`File ${formData.documents.path} deleted successfully.`);
        }
      });
    }
    console.log("Email sent successfully");
    return { success: true, message: "Email sent successfully" };
  } catch (error: any) {
    console.error("Error sending email:", error);
    return { success: false, message: error.message };
  }
}
