import { useTheme } from 'next-themes';

export function useDarkMode() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  
  const setIsDark = (dark: boolean) => {
    setTheme(dark ? 'dark' : 'light');
  };

  return { isDark, setIsDark };
}
