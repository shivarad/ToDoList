import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyThemeProvider from './providers/theme/theme-provider'
import {GlobalStyles} from './asset/styles/global';
import { Provider } from 'react-redux';
// import {store,persistor} from './redux/store';
// import {PersistGate} from 'redux-persist/integration/react';
import {createStore , applyMiddleware} from 'redux';
import logger from 'redux-logger';
import ListReducer from './redux/List/List-reducers'

const middlewares=[logger];
export const store =createStore(ListReducer, applyMiddleware(...middlewares));

ReactDOM.render(
  <MyThemeProvider>
    <Provider store={store}>
      {/* <PersistGate persistor={persistor}> */}
    <GlobalStyles/>
    <App />
    {/* </PersistGate> */}
    </Provider>
  </MyThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
