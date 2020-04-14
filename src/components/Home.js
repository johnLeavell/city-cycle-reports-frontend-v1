import React, { Component } from 'react'
import ReportsContainer from './Reports/ReportsContainer'

export class Home extends Component {
    
    renderNewestReports = () => {
        const sortedReports = this.props.reports.sort((reportA, reportB) => new Date(reportA.time) < new Date(reportB.time) ? 1 : -1).slice(0, 5)

        return sortedReports
     };



    render() {

        return (
            <div>
                <h1>Welcome to City Cycle Reports</h1>
                <ReportsContainer reports={this.renderNewestReports()} />
            </div>
        )
    }
}

export default Home
