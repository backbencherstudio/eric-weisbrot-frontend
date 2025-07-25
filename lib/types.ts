export interface ContactForm {
    name: string;
    phone: string;
    service: string;
  }
  
  export interface DocumentUploadForm {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    documents: File | null; // or you can store the file URL after uploading it
  }
  
  export interface MessageForm {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    subject: string;
    message: string;
    source: string;
  }
  