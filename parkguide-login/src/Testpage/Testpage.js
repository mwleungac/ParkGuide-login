import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import axios from 'axios'

export default class Testpage extends Component {
    constructor(props) {
        super(props)
        this.state = this.initialState

        this.bookChange = this.bookChange.bind(this)
        this.submitbook = this.submitbook.bind(this)
    }

    initialState = {
        id: '',
        fullName: '',
        carLicense: ''
    }

    resetBook = () => {
        this.setState(() => this.initialState)

    }


    submitbook(event) {
       
        event.preventDefault();

        const book = {
            id: this.state.id,
            fullName: this.state.fullName,
            carLicense: this.state.carLicense
        }

        axios.post("http://localhost:8080/rest/parkguide/members", book)
        // .then (response => console.log(response.data))
        .then(response => {
            if(response.data != null){
                this.setState(this.initialState)
                alert('Saved successfully')
            }
        })
    }

    bookChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        const { id, fullName, carLicense } = this.state

        return (
            <div>
                <h1>This is a Testpage</h1>

                <form onReset={this.resetBook} onSubmit={this.submitbook} id="bookFormId">
                    <Form.Control required autoComplete="off" name="id" value={id} onChange={this.bookChange} type="text" placeholder="Enter id"></Form.Control>
                    <Form.Control autoComplete="off" name="fullName" value={fullName} onChange={this.bookChange} type="text" placeholder="Enter name"></Form.Control>
                    <Form.Control autoComplete="off" name="carLicense" value={carLicense} onChange={this.bookChange} type="text" placeholder="Enter car license"></Form.Control>
                    <Button size="sm" type="submit">Submit</Button>
                    {'  '}
                    <Button size="sm" type="reset">Reset</Button>
                </form>

            </div>
        )
    }
}
