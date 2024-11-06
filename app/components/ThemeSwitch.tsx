// components/ThemeSwitch.tsx
"use client";

import { useState, useEffect } from 'react';

const ThemeSwitch = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    setTheme(storedTheme || 'light');
    document.documentElement.classList.toggle('dark', storedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
    >
      {theme === 'light' ? '🌞 Light Mode' : '🌜 Dark Mode'}
    </button>
  );
};

export default ThemeSwitch;
