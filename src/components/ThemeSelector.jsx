import React from 'react';

const ThemeSelector = ({ currentTheme, setTheme }) => {
  const themes = [
    { id: 'default', name: 'Pop' },
    { id: 'retro', name: 'Bold' },
    { id: 'dark', name: 'Deep' },
    { id: 'cyber', name: 'Neon' },
  ];

  return (
    <div className="flex gap-4 justify-center my-6 flex-wrap">
      {themes.map((theme) => (
        <button
          key={theme.id}
          onClick={() => setTheme(theme.id)}
          className={`px-6 py-2 rounded-full font-bold uppercase tracking-wider border-2 transition-all transform hover:-translate-y-1 ${
            currentTheme === theme.id
              ? 'border-text bg-text text-background shadow-[4px_4px_0px_0px_var(--color-primary)]'
              : 'border-gray-300 bg-white/50 text-gray-800 hover:border-text hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]'
          }`}
        >
          {theme.name}
        </button>
      ))}
    </div>
  );
};

export default ThemeSelector;
