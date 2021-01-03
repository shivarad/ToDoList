import React, { Fragment  } from 'react';
import Header from './components/header/header';
import Body from './components/body/body';
import {GlobalStyles} from './asset/styles/global';


 const App=()=> {
   return(
      <Fragment>
          <GlobalStyles/>
          <Header />
          <Body/>
      </Fragment>
  )};

export default App;
