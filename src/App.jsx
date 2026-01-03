import React, { useState, useEffect } from 'react';
import PredictionForm from './components/PredictionForm';
import PredictionCard from './components/PredictionCard';
import ThemeSelector from './components/ThemeSelector';

function App() {
  const [theme, setTheme] = useState('default');
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Apply theme to body/root
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleFormSubmit = (name, predictions) => {
    setUserData({ name, predictions });
  };

  const handleEdit = () => {
    setUserData(null);
  }

  return (
    <div className="min-h-screen bg-background text-text transition-colors duration-300 p-4 md:p-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl md:text-6xl font-black mb-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent pb-2">
          2025 Predictions
        </h1>
        <p className="text-lg opacity-80">What's going to happen in Pop Culture?</p>
      </header>

      {!userData && (
        <>
           <div className="flex justify-center mb-8">
              <ThemeSelector currentTheme={theme} setTheme={setTheme} />
          </div>
          <PredictionForm onSubmit={handleFormSubmit} />
        </>
      )}

      {userData && (
         <div className="flex flex-col items-center gap-8 animate-fade-in-up">
           <ThemeSelector currentTheme={theme} setTheme={setTheme} />
           <PredictionCard
             name={userData.name}
             predictions={userData.predictions}
             onEdit={handleEdit}
           />
         </div>
      )}

    </div>
  );
}

export default App;
