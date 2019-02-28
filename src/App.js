/* eslint-disable no-undef */
import React, { Component } from 'react';
import Gibhub from './Components/Gibhup/Gibhub';
import './App.css';



const LikeButton = ({ count }) => (
    <span className="like-button">
      <i className="fa fa-folder folder-button" />
      {count > 0 && <span className="like-count">   {count}
      </span>}
    </span>
  );
  

class App extends Component {
  
  render() {
   
    return (
      <div className="App">
         
     

        <Gibhub />

        
     
      
      </div>
    );
  }
}

export default App;
