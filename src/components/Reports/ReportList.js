import React, { Component } from 'react'

const API = 'http://localhost:3000/api/v1/'
class ReportList extends Component {
    
    componentDidMount() {
        fetch(API + "reports")
        .then( resp => resp.json())
        .then( reports => 
            this.setState({
                reports: reports}))
    }



    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default ReportList
