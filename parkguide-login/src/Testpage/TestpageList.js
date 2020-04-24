import React, { Component } from 'react'
import axios from 'axios'


export default class TestpageList extends Component {
    constructor(props){
        super(props)

        this.state={
            books:[]
        }
    }

    componentDidMount(){
        axios.get("http://localhost:8080/rest/parkguide/members/00000001")
        .then(response => console.log(response.data))

    }


    render() {
        return (
            <div>
                
            </div>
        )
    }
}
