import React, { Component } from 'react'
import UserCard from './UserCard'

export class Dashboard extends Component {

  renderUsers = () => {
    // console.log(this.props.users);
    return this.props.users.map((user,index) => {
      return <UserCard key={index} user={user}/>

    })
  }

  // renderUserReports = () => {
  //   return this.props.userReports.map((report,index) =>{
  //     return <UserCard key={index} report={report} />
      
  //   })
  // }

  
    render() {
      // console.log(this.props);
      
        return (
          <div className="row">
          {this.renderUsers()}
          {/* {this.renderUserReports()} */}
          </div>
        )
    }
}

export default Dashboard
