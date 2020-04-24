import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'

export default class Testpage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            author: ''
        }

        this.bookChange=this.bookChange.bind(this)
        this.submitbook=this.submitbook.bind(this)
    }

    submitbook(event) {
        alert('Title: ' + this.state.title + ', Author: ' + this.state.author)
        event.preventDefault();
    }

    bookChange(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>This is a Testpage</h1>

                <form onSubmit={this.submitbook} id="bookFormId">
                    <Form.Control required name="title" value={this.state.title} onChange={this.bookChange} type="text" placeholder="Enter title"></Form.Control>
                    <Form.Control name="author" value={this.state.author} onChange={this.bookChange} type="text" placeholder="Enter author"></Form.Control>
                    <Button size="sm" type="submit">Submit</Button>
                </form>

            </div>
        )
    }
}
