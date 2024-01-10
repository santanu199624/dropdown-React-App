
import { useEffect, useState } from 'react';
import './App.css';
import Dropdown from './component/Dropdown';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  // const {themeMode, darkTheme, lightTheme} = useTheme()
  const [themeMode, setThemeMode] = useState("light")

  const darkTheme = () => {
    setThemeMode("dark")
  }

  const lightTheme = () => {
    setThemeMode("light")
  }

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light")
    document.querySelector("html").classList.add(themeMode)
  }, [themeMode])
  
  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
      <div className="App dark:bg-slate-800 dark:text-white">
        <Dropdown />
      </div>
    </ThemeProvider>
  );
}

export default App;
