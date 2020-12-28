import React, { Fragment } from 'react';
import Header from './components/header/header';
import Body from './components/body/body'
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      darkMode: true
    }
  }
  
  
  render(){
    const {darkMode}=this.state;
    const ChangeMode=()=>{
      this.setState({darkMode:!this.state.darkMode});
    }
  return (
   <Fragment>
     <Header isDarkMode={darkMode} ChangeMode={ChangeMode}></Header>
      <Body/>
   </Fragment>
  );
}
}

export default App;
