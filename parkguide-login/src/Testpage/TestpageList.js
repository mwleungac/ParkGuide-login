import React, { Component } from 'react'
import axios from 'axios'


export default class TestpageList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            books: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8080/rest/parkguide/parking-lots")
            .then(response => response.data)
            .then(data => {
                this.setState({ books: data })
            })
    }


    render() {
        return (
            <div>
                <table>
                    <thead>
                        <td>No</td>
                        <td>Name</td>
                        <td>Location</td>
                        <td>Vacancy</td>
                    </thead>
                    {
                        this.state.books.length === 0 ?
                            <tr align="center">
                                <td>Lots available</td>
                            </tr> :
                            this.state.books.map((book) => (
                                <tr key={book.id}>
                                    <td>{book.id}</td>
                                    <td>{book.name}</td>
                                    <td>{book.location}</td>
                                    <td>{book.vacancy}</td>
                                </tr>

                            ))}
                </table>

                {/* <p>{this.state.books.length} lots retrieved</p> */}


            </div>
        )
    }
}
