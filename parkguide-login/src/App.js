import React from 'react';
import './App.css';
import Routes from './Routes';
import Navigation from './../src/NavigationBar/Navbar'


function App() {
  
  let isLogin =true
  if(isLogin){
    return (
    <div className="App">
      <Navigation />
      <Routes />
      
    </div>
  );
  }
   return null
  
}

export default App;
