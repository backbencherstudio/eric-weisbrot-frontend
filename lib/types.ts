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


  export interface AppointmentForm {
    // Patient Name
    firstName: string;
    lastName: string;
  
    // Contact
    phone: string;
    email: string;
  
    // Demographic
    state?: string;            // e.g. “CA”
    dateOfBirth?: string;      // ISO, yyyy-mm-dd (or any string you collect)
  
    // Clinical
    therapies?: string;          // “Ketamine”, “TMS”, etc.
    conditions?: string;        // “Depression”, “Anxiety”, etc.
  
    // Marketing source
    source?: string;     // one of the radio values
  
    // Free text
    message?: string;
  }
  