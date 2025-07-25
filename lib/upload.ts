// lib/upload.ts (Multer configuration)
import multer from 'multer';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs'; // For file handling

// Configure multer to store files locally in a temporary folder
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = 'uploads/images';
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const fileExt = path.extname(file.originalname); // Get the file extension
    const baseName = path.basename(file.originalname, fileExt); // Get the filename without extension
    const uniqueSuffix = uuidv4(); // Generate a UUID
    cb(null, `${baseName}-${uniqueSuffix}${fileExt}`); // Format: originalname-uuid.ext
  },
});

const upload = multer({ storage });

export default upload;