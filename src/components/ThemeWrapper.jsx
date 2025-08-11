"use client";
import { useTheme } from '../context/ThemeContext';

const ThemeWrapper = ({ children }) => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      {children}
    </div>
  );
};

export default ThemeWrapper;
