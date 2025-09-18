import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { emailQueue } from '@/lib/queue';

import {v4 as uuid} from 'uuid'

// Handle the image upload and additional fields
export async function POST(req: NextRequest) {
  try {
    // Get form data from the request (including files and fields)
    const formData = await req.formData();

    // Extract the image file and form fields from the form data
    const file = formData.get('document');
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const phone = formData.get('phone');
    const email = formData.get('email');

    // Validate if the file and form data are present
    if (!file || !(file instanceof Blob)) {
      return NextResponse.json({ success: false, message: 'No image file uploaded' }, { status: 400 });
    }

    if (!firstName || !phone ) {
      return NextResponse.json({ success: false, message: 'Missing form data' }, { status: 400 });
    }

    // Create a directory to save the uploaded image if it doesn't exist
    const uploadDir = path.join(process.cwd(), 'uploads/images');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    // Generate a unique filename for the image
    const filename = `${uuid()}-${file.name}`;
    const filePath = path.join(uploadDir, filename);

    // Save the image to the server (buffer from file)
    const buffer = Buffer.from(await file.arrayBuffer());
    fs.writeFileSync(filePath, buffer);

    
    // Return a success message with the file path and form data
    await emailQueue.add('sendEmail', {
      formData: {
        firstName,
        lastName,
        phone,
        email,
        documents: {
          name: file.name,
          originalname: filename,
          path: filePath,
        },
      },
      formType: 'documentUpload',
    });

    return NextResponse.json({
      success: true,
      message: 'Image uploaded successfully',
      filePath: `/uploads/images/${filename}`,
      firstName,
      lastName,
      phone,
      email,
    });
  } catch (error) {
    // Handle unexpected errors
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
