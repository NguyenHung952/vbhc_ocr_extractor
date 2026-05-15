export default function Header() {
  return (
    <header className="border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400 text-2xl font-black text-slate-950">
            AI
          </div>

          <div>
            <h1 className="text-2xl font-black">
              VBHC OCR AI PRO
            </h1>

            <p className="text-sm text-slate-400">
              OCR • OpenAI • Firebase
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
