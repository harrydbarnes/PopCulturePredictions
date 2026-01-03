import React from 'react';

const Inspiration = () => {
  const lastYearPredictions = [
    "Taylor Swift releases a rock album",
    "A new social media app replaces Twitter/X",
    "VR headsets become mainstream fashion",
    "Another Barbenheimer event happens",
    "Rihanna finally releases an album",
  ];

  return (
    <div className="mt-12 p-6 bg-white/5 rounded-xl border border-gray-200/20 max-w-2xl mx-auto">
      <h3 className="text-xl font-bold mb-4 text-center">Want Inspiration?</h3>
      <p className="text-center mb-4 opacity-80">Here are some popular predictions people made last year:</p>
      <ul className="list-disc list-inside space-y-2 max-w-lg mx-auto">
        {lastYearPredictions.map((item, i) => (
          <li key={i} className="text-sm opacity-90">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Inspiration;
