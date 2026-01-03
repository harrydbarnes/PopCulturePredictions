import React from 'react';
import { Download } from 'lucide-react';
import html2canvas from 'html2canvas';

const PredictionCard = ({ name, predictions, theme, onEdit }) => {
  const handleDownload = async () => {
    const element = document.getElementById('prediction-card');
    if (element) {
      const canvas = await html2canvas(element, {
        scale: 2,
        backgroundColor: null,
      });
      const data = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = data;
      link.download = `${name}-2025-predictions.png`;
      link.click();
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto">
       <div className="flex gap-4 mb-6">
        <button
          onClick={onEdit}
          className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
        >
          Edit Predictions
        </button>
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-lg hover:opacity-90 transition-opacity"
        >
          <Download size={20} />
          Download Card
        </button>
      </div>

      <div
        id="prediction-card"
        className="w-full aspect-[4/5] bg-background text-text p-8 rounded-xl shadow-2xl border-4 border-primary flex flex-col relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary opacity-20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent opacity-20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

        <header className="relative z-10 text-center mb-8">
          <h1 className="text-3xl font-bold uppercase tracking-wider text-primary">2025 Predictions</h1>
          <h2 className="text-xl mt-2 font-medium">Here's what <span className="text-secondary font-bold text-2xl decoration-wavy underline decoration-accent">{name}</span> predicts</h2>
        </header>

        <div className="flex-1 relative z-10 flex flex-col justify-center">
          <ol className="list-decimal list-inside space-y-3">
            {predictions.map((pred, index) => (
              <li key={index} className="text-lg font-medium border-b border-gray-200/20 pb-1">
                <span className="ml-2">{pred}</span>
              </li>
            ))}
          </ol>
        </div>

        <footer className="relative z-10 mt-8 text-center text-sm opacity-70">
          <p>#PopCulture2025</p>
        </footer>
      </div>
    </div>
  );
};

export default PredictionCard;
