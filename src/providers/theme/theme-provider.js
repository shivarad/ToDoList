import  { createContext, useState } from 'react';
import { LightTheme,DarkTheme } from '../../asset/styles/theme';


export const ThemeContext=createContext({
    theme:'light',
    toggleTheme:()=>{}
});

const MyThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(LightTheme);
  const[darkMode,setDarkMode]=useState(false);
  const toggleTheme =()=> {setTheme(theme===LightTheme?DarkTheme:LightTheme);setDarkMode(!darkMode)}
  

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        darkMode
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default MyThemeProvider;