import React, { useState } from 'react';

const ThemeSelector = ({ currentTheme, setTheme }) => {
  const themes = [
    { id: 'default', name: 'Vibrant' },
    { id: 'retro', name: 'Retro' },
    { id: 'dark', name: 'Dark Mode' },
    { id: 'cyber', name: 'Cyberpunk' },
  ];

  return (
    <div className="flex gap-4 justify-center my-6">
      {themes.map((theme) => (
        <button
          key={theme.id}
          onClick={() => setTheme(theme.id)}
          className={`px-4 py-2 rounded-full border-2 transition-all ${
            currentTheme === theme.id
              ? 'border-primary bg-primary text-white'
              : 'border-gray-300 hover:border-primary'
          }`}
        >
          {theme.name}
        </button>
      ))}
    </div>
  );
};

export default ThemeSelector;
