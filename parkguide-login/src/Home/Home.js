import React, { Component } from "react";
import "./Home.css";
import { Button } from 'react-bootstrap';
import Facebook from './../components/Facebook';
import history from './../history'


export default class Home extends Component { 
  
  render() {
    
    return (
      
      <div className="Home">
        <div className="lander">
          <h1>Home page</h1>
          <p></p>
       
          <Facebook/>
          {/* <Button variant="btn btn-success" onClick={() => history.push('/Testpage')}>Register</Button> */}
          
        </div>
      </div>
    );
  }
}
