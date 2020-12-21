import React from 'react';
import sunIcon from "./asset/images/icon-sun.svg";
import moonIcon from "./asset/images/icon-moon.svg";

//import {Header,Container,HeaderTxt,ModeBtn} from './AppStyles';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      darkMode: true
    }
  }

   ChangeMode=()=>{
    this.setState({darkMode:!this.state.darkMode});
  }
  render(){
    const {darkMode}=this.state;

  return (
   <div className="main-container">
     <div className={`${darkMode? 'dark-hdr' :''} header` } >
       <div className='container'>
          <h2 className='header-txt'>T O D O</h2>
          <button  onClick={this.ChangeMode} className='mode-btn'><img src={`${darkMode? sunIcon:moonIcon}`} alt="mode icon"/></button>
       </div>
     </div>
     
   </div>
  );
}
}

export default App;
