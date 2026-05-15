import { Upload } from 'lucide-react';

import { useDropzone } from 'react-dropzone';

import {
  processFileOCR
} from '../services/ocrService';

export default function UploadBox({
  setOcrText,
  setLoading
}) {

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': [],
      'application/pdf': []
    },

    multiple: false,

    onDrop: async acceptedFiles => {
      const file = acceptedFiles[0];

      if (!file) return;

      setLoading(true);

      const text = await processFileOCR(file);

      setOcrText(text);

      setLoading(false);
    }
  });

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <div
        {...getRootProps()}
        className="cursor-pointer rounded-3xl border-2 border-dashed border-cyan-500/40 p-12 text-center transition hover:bg-cyan-500/5"
      >
        <input {...getInputProps()} />

        <Upload className="mx-auto mb-4 h-16 w-16 text-cyan-400" />

        <h2 className="text-2xl font-black">
          Upload tài liệu
        </h2>

        <p className="mt-2 text-slate-400">
          JPG, PNG, PDF
        </p>
      </div>
    </div>
  );
}
