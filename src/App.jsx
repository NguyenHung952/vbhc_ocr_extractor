import { useState } from 'react';

import Header from './components/Header';
import UploadBox from './components/UploadBox';
import OCRPreview from './components/OCRPreview';
import ResultPanel from './components/ResultPanel';

export default function App() {
  const [ocrText, setOcrText] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />

      <main className="mx-auto grid max-w-7xl gap-6 px-6 py-10 lg:grid-cols-2">
        <section className="space-y-6">
          <UploadBox
            setOcrText={setOcrText}
            setLoading={setLoading}
          />

          <OCRPreview
            ocrText={ocrText}
            setOcrText={setOcrText}
          />
        </section>

        <section>
          <ResultPanel
            result={result}
            setResult={setResult}
            ocrText={ocrText}
            loading={loading}
          />
        </section>
      </main>
    </div>
  );
}
