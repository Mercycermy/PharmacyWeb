import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState('light');

  useEffect(() => {
    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const updateTheme = (e) => {
      setThemeName(e.matches ? 'light' : 'dark');
    };

    setThemeName(darkMediaQuery.matches ? 'light' : 'dark');
    darkMediaQuery.addEventListener('change', updateTheme);

    return () => {
      darkMediaQuery.removeEventListener('change', updateTheme);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = themeName === 'dark' ? 'light' : 'dark';
    localStorage.setItem('themeName', newTheme);
    setThemeName(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeContext;
