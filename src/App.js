import React, { Fragment,useContext  } from 'react';
import Header from './components/header/header';
import Body from './components/body/body';
import {GlobalStyles} from './asset/styles/global';
import { ThemeProvider } from 'styled-components';
import {ThemeContext} from './providers/theme/theme-provider';


 const App=()=> {
   const {theme}=useContext(ThemeContext)
   return(
    <ThemeProvider theme={theme}>
      <Fragment>
          <GlobalStyles/>
          <Header />
          <Body/>
      </Fragment>
   </ThemeProvider>
  )};

export default App;
