import * as pdfjsLib from 'pdfjs-dist';

import Tesseract from 'tesseract.js';

pdfjsLib.GlobalWorkerOptions.workerSrc =
  `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.0.379/pdf.worker.min.js`;

export async function processPDF(file) {

  const arrayBuffer = await file.arrayBuffer();

  const pdf = await pdfjsLib.getDocument({
    data: arrayBuffer
  }).promise;

  let finalText = '';

  for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {

    const page = await pdf.getPage(pageNum);

    const viewport = page.getViewport({
      scale: 2
    });

    const canvas = document.createElement('canvas');

    const context = canvas.getContext('2d');

    canvas.width = viewport.width;
    canvas.height = viewport.height;

    await page.render({
      canvasContext: context,
      viewport
    }).promise;

    const blob = await new Promise(resolve =>
      canvas.toBlob(resolve)
    );

    const {
      data: { text }
    } = await Tesseract.recognize(
      blob,
      'vie+eng'
    );

    finalText += text;
  }

  return finalText;
}
