import React, { Component } from 'react'
import axios from 'axios'


export default class TestpageList extends Component {
    constructor(props){
        super(props)

        this.state={
            books: []
        }
    }

    componentDidMount(){
        axios.get("http://localhost:8080/rest/parkguide/parking-lots")
         .then(response => {
            this.setState({books: response.data})

        })

    }


    render() {
        return (
            <div>
                <table>
                    <td>{this.state.books.length} lots retrieved</td>
                </table>
                
            </div>
        )
    }
}
