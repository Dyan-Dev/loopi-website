import { useEffect, useState } from 'react';

export function useDarkMode() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('dark-mode');
      if (stored !== null) {
        return stored === 'true';
      }
      // Default to light mode
      return false;
    }
    return false;
  });

  useEffect(() => {
    const html = document.documentElement;
    
    if (isDark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
    
    localStorage.setItem('dark-mode', String(isDark));
  }, [isDark]);

  return { isDark, setIsDark };
}