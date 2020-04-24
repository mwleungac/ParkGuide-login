import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import "./../Home/Home.css";
import history from './../history';


export default class Test extends Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
            <div><h2>Test page</h2>
            <Button variant="btn btn-success" onClick={() => history.push('/')}>Go Home</Button>
            </div>
        </div>
        )
    }
}
