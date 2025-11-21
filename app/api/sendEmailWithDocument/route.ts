import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/sendEmail";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "20mb", // adjust the size you need
    },
  },
};
// Handle the image upload and additional fields
export async function POST(req: NextRequest) {
  try {
    // Get form data from the request (including files and fields)
    const formData = await req.formData();

    // Extract the image file and form fields from the form data
    const file = formData.get("document");
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const phone = formData.get("phone");
    const email = formData.get("email");

    // Validate if the file and form data are present
    if (!file || !(file instanceof Blob)) {
      return NextResponse.json(
        { success: false, message: "No image file uploaded" },
        { status: 400 }
      );
    }

    if (!firstName || !phone) {
      return NextResponse.json(
        { success: false, message: "Missing form data" },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    const result = await sendEmail(
      {
        firstName,
        lastName,
        phone,
        email,
        documents: {
          name: file.name,
          originalname: file.name,
          buffer,
          mimetype: file.type,
        },
      },
      "documentUpload"
    );

    if (!result.success) {
      return NextResponse.json(
        { success: false, message: result.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Document emailed successfully",
      firstName,
      lastName,
      phone,
      email,
    });
  } catch (error: any) {
    // Handle unexpected errors
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
