import {
  extractVBHC
} from '../services/aiService';

export default function ResultPanel({
  result,
  setResult,
  ocrText
}) {

  async function handleAI() {
    const data = await extractVBHC(ocrText);

    setResult(data);
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <button
        onClick={handleAI}
        className="mb-6 rounded-2xl bg-cyan-500 px-6 py-3 font-bold"
      >
        AI Trích xuất
      </button>

      {result && (
        <pre className="overflow-auto rounded-2xl bg-slate-950 p-5 text-cyan-300">
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </div>
  );
}
