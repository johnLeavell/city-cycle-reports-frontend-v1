import React, { Component } from 'react'
import ReportsContainer from './Reports/ReportsContainer'

export class Dashboard extends Component {



    render() {      
        return (
          <div className="row">
            {/* <header>{this.props.loggedInUser.username}'s Dashboard</header> */}
            {/* <h1>Fill in different component here</h1> */}
            {/* <h1>Fill in other component here</h1> */}
            <ReportsContainer renderButtons={true} handleEditReport={this.props.handleEditReport} handleDeleteReport={this.props.handleDeleteReport} reports={this.props.loggedInUser.reports} />
          </div>
        )
    }
}

export default Dashboard
