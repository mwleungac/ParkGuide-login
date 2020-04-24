import React, { Component } from "react";
import "./Home.css";

import Facebook from './../components/Facebook';

export default class Home extends Component { 
  
  render() {
    
    return (
      <div className="Home">
        <div className="lander">
          <h1>Home page</h1>
          <p></p>
       
          <form>
            <Facebook/>
            {/* <Button variant="btn btn-success" onClick={() => history.push('/Test')}>Click button to Testpage</Button> */}
          </form>
          
        </div>
      </div>
    );
  }
}
