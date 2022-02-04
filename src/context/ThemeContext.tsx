import { createContext, FC, useContext, useState } from "react"; 

export const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = createContext(themes.dark);

export const ThemeProvider: FC = ({ children }) => {
  const [ theme, setTheme ] = useState(themes.dark);

  setTimeout(() => {
    setTheme(themes.light);
  }, 5000)

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('You should be within a provider');
  }
  return context;
};

export default ThemeContext;