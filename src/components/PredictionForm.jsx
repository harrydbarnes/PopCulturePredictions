import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

const PredictionForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [predictions, setPredictions] = useState(Array(10).fill(''));

  const handlePredictionChange = (index, value) => {
    const newPredictions = [...predictions];
    newPredictions[index] = value;
    setPredictions(newPredictions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!name.trim()) {
      alert("Please enter your name!");
      return;
    }
    const filledPredictions = predictions.filter(p => p.trim());
    if (filledPredictions.length < 10) {
      alert("Please enter all 10 predictions!");
      return;
    }
    onSubmit(name, predictions);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto space-y-6 bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-lg font-bold text-text">What's your name?</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-3 rounded-lg bg-background border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary outline-none text-text transition-all"
          placeholder="Enter your name"
          required
        />
      </div>

      <div className="space-y-4">
        <label className="text-lg font-bold text-text flex items-center gap-2">
          <Sparkles size={20} className="text-accent" />
          Your 10 Predictions
        </label>
        <div className="grid gap-3">
          {predictions.map((pred, index) => (
            <div key={index} className="flex gap-3 items-center">
              <span className="font-mono text-gray-500 w-6 text-right">{index + 1}.</span>
              <input
                type="text"
                value={pred}
                onChange={(e) => handlePredictionChange(index, e.target.value)}
                className="flex-1 p-2 rounded-lg bg-background border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary outline-none text-text text-sm"
                placeholder={`Prediction #${index + 1}`}
                required
              />
            </div>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-4 bg-primary text-white font-bold text-xl rounded-xl hover:bg-opacity-90 hover:scale-[1.02] transition-all shadow-lg"
      >
        Generate My Card
      </button>
    </form>
  );
};

export default PredictionForm;
