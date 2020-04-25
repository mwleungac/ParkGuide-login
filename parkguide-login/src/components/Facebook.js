import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'
import { Form, Button } from 'react-bootstrap';
import history from './../history';
import axios from 'axios'


export default class Facebook extends Component {
constructor(props){
    super(props)

    this.state = this.initialState

    this.submitbook=this.submitbook.bind(this)
    this.bookChange=this.bookChange.bind(this)

}

initialState = {
    isLoggedIn: false,
    userID: '',
    name: '',
    email: '',
    picture: '',
    carLicense: ''
}
    

submitbook(event){
    event.preventDefault()
    //alert(this.state.userID + '   ' + this.state.name + '   ' + this.state.carLicense)

    const book ={
        id: this.state.userID,
        fullName: this.state.name,
        carLicense: this.state.carLicense
    }
    
    axios.post("http://localhost:8080/rest/parkguide/members", book)
    .then(response => {
        if(response.data !=null){
            this.setState(this.initialState)
            alert("Saved successfully")
        }
    })


}

bookChange(event){
    this.setState({
        [event.target.name]:event.target.value
    })
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
        const { carLicense } = this.state
        let fbContent
        if (this.state.isLoggedIn) {

            fbContent = (
                <div style={{
                    width: '400',
                    margin: 'auto',
                    padding: '20px'
                }}>

                    <h2>Welcome {this.state.name}</h2>
                    <p>Enter car license</p>
                    <form onChange={this.bookChange} onSubmit={this.submitbook}><Form.Control required autoComplete="off" name="carLicense" value={carLicense} onChange={this.bookChange} type="text" placeholder="Enter car license"></Form.Control>
                        <Button size="sm" type="submit">Submit</Button></form>

                </div>
            )



        } else {
            fbContent = (<FacebookLogin
                appId="667513370492031"
                autoLoad={false}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />)

        }


        return (
            <div>
                {fbContent}

            </div>
        )
    }
}
