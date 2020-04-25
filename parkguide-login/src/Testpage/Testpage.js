import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import axios from 'axios'
import history from './../history'

export default class Testpage extends Component {
    constructor(props) {
        super(props)
        this.state = this.initialState

        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    initialState = {
        id: '',
        fullName: '',
        carLicense: ''
    }

    resetForm = () => {
        this.setState(() => this.initialState)

    }


    submitForm(event) {
       
        event.preventDefault();

        const book = {
            id: this.state.id,
            fullName: this.state.fullName,
            carLicense: this.state.carLicense
        }

        axios.post("http://localhost:8080/rest/parkguide/members", book)
        //  .then (response => console.log(response.data))
        .then(response => {
            if(response.data != null){
                this.setState(this.initialState)
                alert('Saved successfully')
                history.push('/TestpageList')
            }
        })

    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        const { id, fullName, carLicense } = this.state

        return (
            <div>
                <h1>This is a Testpage</h1>

                <form onReset={this.resetForm} onSubmit={this.submitForm} id="bookFormId">
                    <Form.Control required autoComplete="off" name="id" value={id} onChange={this.onChange} type="text" placeholder="Enter id"></Form.Control>
                    <Form.Control reuired autoComplete="off" name="fullName" value={fullName} onChange={this.onChange} type="text" placeholder="Enter name"></Form.Control>
                    <Form.Control required autoComplete="off" name="carLicense" value={carLicense} onChange={this.onChange} type="text" placeholder="Enter car license"></Form.Control>
                    <Button size="sm" type="submit">Submit</Button>
                    {'  '}
                    <Button size="sm" type="reset">Reset</Button>
                </form>

            </div>
        )
    }
}
