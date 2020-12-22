import React from 'react';
import Header from './components/header/header'
//import {Header,Container,HeaderTxt,ModeBtn} from './AppStyles';
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
   <div className="main-container">
     <Header isDarkMode={darkMode} ChangeMode={ChangeMode}></Header>
     <div className={`${darkMode? 'dark-body' :''} body` }></div>
   </div>
  );
}
}

export default App;
