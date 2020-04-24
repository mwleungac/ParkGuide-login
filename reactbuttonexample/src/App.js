import React from 'react';
import './App.css';
import Navigation from './NavigationBar/Navbar';
import Routes from './Routes';


function App() {
  
  let isLogin =true
  if(isLogin){
    return (
    <div className="App">
      {/* <Navigation /> */}
      <Routes />
      
    </div>
  );
  }
   return null
  
}

export default App;
