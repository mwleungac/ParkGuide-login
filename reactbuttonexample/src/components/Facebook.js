import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'
import { Button } from 'react-bootstrap';
import history from './../history';

export default class Facebook extends Component {
    
    state={
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: ''
    }

    responseFacebook = response => {
        console.log(response)

        this.setState({
            isLoggedIn: true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
        })
    }
    componentClicked = () => console.log('clicked')



    render() {
        let fbContent

        if(this.state.isLoggedIn){
            
            fbContent = (
                <div style={{
                    width: '400',
                    margin: 'auto',
                    padding: '20px'
                }}>
                   
                    <h2>Welcome {this.state.name}</h2>
                    <Button variant="btn btn-success" onClick={() => history.push('/All_Parkings')}>Click to book parking lots</Button>
                </div>
            )

            

        } else {
            fbContent =(<FacebookLogin
            appId="667513370492031"
            autoLoad={false}
            fields="name,email,picture"
            onClick={this.componentClicked}
            callback={this.responseFacebook}/>)

        }


        return (
            <div>
                {fbContent} 
                      
            </div>
        )
    }
}
