import  { createContext, useState} from 'react';
import { LightTheme,DarkTheme } from '../../asset/styles/theme';
import { ThemeProvider } from 'styled-components';


export const ThemeContext=createContext({
    theme:'light',
    toggleTheme:()=>{}
});

const MyThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(LightTheme);
  const toggleTheme =()=> {setTheme(theme===LightTheme?DarkTheme:LightTheme)}
  

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      <ThemeProvider theme={theme}>
      {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default MyThemeProvider;