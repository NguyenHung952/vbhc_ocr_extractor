import Tesseract from 'tesseract.js';

import {
  processPDF
} from './pdfService';

export async function processFileOCR(file) {

  if (file.type === 'application/pdf') {
    return await processPDF(file);
  }

  const {
    data: { text }
  } = await Tesseract.recognize(
    file,
    'vie+eng'
  );

  return text;
}
