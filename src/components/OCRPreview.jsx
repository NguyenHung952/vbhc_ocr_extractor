export default function OCRPreview({
  ocrText,
  setOcrText
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <h2 className="mb-4 text-2xl font-black">
        Nội dung OCR
      </h2>

      <textarea
        value={ocrText}
        onChange={e => setOcrText(e.target.value)}
        className="min-h-[400px] w-full rounded-2xl border border-white/10 bg-slate-950 p-4 outline-none"
      />
    </div>
  );
}
