import React from 'react'
import Dashboard from '../Dashboard'

const API = 'http://localhost:3000/api/v1/users/'

class ReportsContainer extends React.Component {
    constructor(){
        super()
        this.state = {
            users: [],
            userReport: []
        }
    }

    componentDidMount = () => {
        fetch(API)
        .then( resp => resp.json())
        .then( users => 
            this.setState({
            // users: users,
            users: users,
            userReport: users.reports}))
            // userReport: users[0].reports}))

    }

    render() {
        return (
            <div>
                <Dashboard users={this.state.users} userReports={this.state.userReport} />
            </div>
        )
    }
}

export default ReportsContainer
