import React, { Component } from 'react'
import ReportsContainer from './Reports/ReportsContainer'

export class Dashboard extends Component {



    render() {
      
        return (
          <div className="row">
            <h1>Fill in different component here</h1>
            <h1>Fill in other component here</h1>
            <ReportsContainer reports={this.props.loggedInUser.reports } />
          </div>
        )
    }
}

export default Dashboard
