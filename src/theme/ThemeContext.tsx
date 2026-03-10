import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type ThemeContextValue = {
  isDark: boolean;
  toggle: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    const stored = window.localStorage.getItem("anveshika-theme");
    if (stored === "light") return false;
    if (stored === "dark") return true;
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;

    if (isDark) {
      root.classList.remove("theme-light");
      root.classList.add("theme-dark");
      window.localStorage.setItem("anveshika-theme", "dark");
    } else {
      root.classList.add("theme-light");
      root.classList.remove("theme-dark");
      window.localStorage.setItem("anveshika-theme", "light");
    }
  }, [isDark]);

  const toggle = () => setIsDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return ctx;
};

