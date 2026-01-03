import React, { useState, useRef } from 'react';
import { Download, Loader2, Disc } from 'lucide-react';

const DECORATIVE_ELEMENTS_COUNT = 5;

const PredictionCard = ({ name, predictions, onEdit }) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [error, setError] = useState(null);
  const cardRef = useRef(null);

  const handleDownload = async () => {
    if (isDownloading) return;
    setError(null);
    const element = cardRef.current;
    if (element) {
      setIsDownloading(true);
      try {
        const html2canvas = (await import('html2canvas')).default;
        const canvas = await html2canvas(element, {
          scale: 2,
          backgroundColor: null,
          useCORS: true,
        });
        const data = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = data;
        link.download = `${name.replace(/[\\/:"*?<>|]+/g, '_')}-2025-predictions.png`;
        link.click();
      } catch (error) {
        console.error('Download failed:', error);
        setError('Failed to generate image. Please try again.');
      } finally {
        setIsDownloading(false);
      }
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto">
       <div className="flex gap-4 mb-6">
        <button
          onClick={onEdit}
          disabled={isDownloading}
          className="px-6 py-2 bg-gray-800 text-white rounded-full font-bold hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
        >
          Edit
        </button>
        <button
          onClick={handleDownload}
          disabled={isDownloading}
          className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-full font-bold hover:opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-none hover:translate-y-1 transform border-2 border-transparent"
        >
          {isDownloading ? (
            <>
              <Loader2 size={20} className="animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Download size={20} />
              Save Card
            </>
          )}
        </button>
      </div>
      {error && <p className="text-red-500 mb-4 font-bold bg-white p-2 rounded">{error}</p>}

      {/* Card Container */}
      <div
        ref={cardRef}
        className="w-full aspect-[4/5] bg-background text-text p-6 rounded-none shadow-2xl flex flex-col relative overflow-hidden font-sans select-none"
      >
        {/* Abstract Background Shapes */}
        <div
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[40%] rounded-full blur-3xl animate-pulse opacity-40"
          style={{
            backgroundColor: 'var(--color-blob-1)',
            mixBlendMode: 'var(--blend-mode)',
          }}
        ></div>
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[50%] rounded-full blur-3xl opacity-40"
          style={{
            backgroundColor: 'var(--color-blob-2)',
            mixBlendMode: 'var(--blend-mode)',
          }}
        ></div>

        {/* Geometric Overlay */}
         <div className="absolute inset-0 z-0 opacity-10"
             style={{
                 backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
                 backgroundSize: '24px 24px'
             }}>
        </div>

        {/* Content */}
        <header className="relative z-10 mb-4 flex justify-between items-start">
            <div className="max-w-[80%]">
                <h2 className="text-sm font-black uppercase tracking-[0.2em] opacity-70">2025 Prediction</h2>
                <h1 className="text-4xl font-black uppercase tracking-tighter leading-none mt-1 break-words">
                    {name}'s<br/>
                    <span className="bg-text text-background px-2 mt-1 inline-block transform -rotate-1">WRAP-UP</span>
                </h1>
            </div>
            <Disc className="w-12 h-12 animate-[spin_10s_linear_infinite] opacity-80" />
        </header>

        <div className="flex-1 relative z-10 flex flex-col justify-center my-2">
          <div className="flex flex-col h-full justify-between">
            {predictions.map((pred, index) => (
              <div key={index} className="flex items-center group">
                <span className="w-8 text-xl font-black font-mono text-primary opacity-80 group-hover:opacity-100 transition-opacity">
                    {index + 1}
                </span>
                <div className="flex-1 border-b-2 border-text/10 pb-0.5 ml-2 overflow-hidden">
                    <span className="text-sm md:text-base font-bold truncate block text-text/90 uppercase tracking-tight">
                        {pred}
                    </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <footer className="relative z-10 mt-4 flex justify-between items-end border-t-4 border-current pt-2">
          <div className="flex flex-col">
              <span className="text-xs font-bold uppercase tracking-widest opacity-70">Total Predictions</span>
              <span className="text-2xl font-black">{predictions.length}</span>
          </div>
           <div className="flex flex-col items-end">
              <span className="text-xs font-bold uppercase tracking-widest opacity-70">Status</span>
              <div className="bg-text text-background px-2 py-0.5 text-xs font-bold uppercase mt-1">Confirmed</div>
          </div>
           <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1 opacity-50">
             <div className="flex gap-1">
                 {Array.from({ length: DECORATIVE_ELEMENTS_COUNT }).map((_, i) => (
                     <div key={i} className={`h-8 w-2 ${i % 2 === 0 ? 'bg-current' : 'bg-transparent border border-current'}`}></div>
                 ))}
             </div>
           </div>
        </footer>
      </div>
    </div>
  );
};

export default PredictionCard;
