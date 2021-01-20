import React, { lazy,Suspense } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Loading from './components/loading/loading';

const TodoPage=lazy(()=>import('./TodoPage/TodoPage'));
 const App=()=> {
   return(
    <BrowserRouter  basename="/">
        <Suspense fallback={<Loading/>}>
          <Route exact path="/" component={TodoPage}/>
        </Suspense>
  </BrowserRouter>
      
  )};

export default App;
