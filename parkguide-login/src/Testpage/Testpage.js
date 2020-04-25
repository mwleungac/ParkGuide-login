import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'

export default class Testpage extends Component {
    constructor(props) {
        super(props)
        this.state = this.initialState

        this.bookChange = this.bookChange.bind(this)
        this.submitbook = this.submitbook.bind(this)
    }

    initialState = {
        title: '',
        author: ''
    }

    resetBook = () => {
        this.setState(() => this.initialState)

    }


    submitbook(event) {
        alert('Title: ' + this.state.title + ', Author: ' + this.state.author)
        event.preventDefault();
    }

    bookChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        const { title, author } = this.state

        return (
            <div>
                <h1>This is a Testpage</h1>

                <form onReset={this.resetBook} onSubmit={this.submitbook} id="bookFormId">
                    <Form.Control required autoComplete="off" name="title" value={title} onChange={this.bookChange} type="text" placeholder="Enter title"></Form.Control>
                    <Form.Control autoComplete="off" name="author" value={author} onChange={this.bookChange} type="text" placeholder="Enter author"></Form.Control>
                    <Button size="sm" type="submit">Submit</Button>
                    {'  '}
                    <Button size="sm" type="reset">Reset</Button>
                </form>

            </div>
        )
    }
}
