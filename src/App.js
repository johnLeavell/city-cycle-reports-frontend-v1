import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import NewReport from './components/Reports/NewReport'
import EditReportForm from './components/Reports/EditReportForm'
import CssBaseline from '@material-ui/core/CssBaseline';


// const API = 'http://localhost:3000/api/v1/'

class App extends React.Component {


  componentDidMount = () => {
        // this.fetchUsers()
        // this.fetchReports()
  }

  // fetchUsers = () => {
  //     fetch(API + "users")
  //     .then( resp => resp.json())
  //     .then( users => 
  //         this.setState({
  //         users: users}))
  // }

  // fetchReports = () => {
  //     fetch(API + "reports")
  //     .then( resp => resp.json())
  //     .then( reports => 
  //         this.setState({
  //         reports: reports}))
  // }


 

  // handleDeleteReport = (e, clickedReport) => {
  //   const confirmation = window.confirm('Are you sure you want to delete this report?');

  //   if(confirmation) {
  //     fetch(`http://localhost:3000/api/v1/reports/${clickedReport.id}`, {method: "DELETE"})
  //     .then( resp => resp.json())
  //     .then( deletedReport => {
  //       const newReports = this.state.reports.filter(report => report.id !== deletedReport.id);
  //       const loggedInUserReports = this.state.loggedInUser.reports.filter(report => report.id !== deletedReport.id)
  //         this.setState({
  //         loggedInUser: {...this.state.loggedInUser, reports: loggedInUserReports},
  //         reports: newReports
  //       })
  //     })
  //   }
  // }

//   handleEditReport = (e, clickedReport) => {
//     e.preventDefault()

//     const reqObj = {
//       method: 'PATCH',
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//         },
//       body: JSON.stringify({
//         ...this.state
//       })
//     }

//     const confirmation = window.confirm('Are you sure you want to edit this report?');
      
//     if(confirmation) {
//       fetch(`http://localhost:3000/api/v1/reports/${clickedReport.id}`, reqObj )
//       .then( resp => resp.json())
//       .then( editedReport => {
        
//       const newReports = this.state.reports.filter(report => report.id !== editedReport.id);
        
//       const loggedInUserReports = this.state.loggedInUser.reports.filter(report => report.id !== editedReport.id)
//         this.setState({
//           loggedInUser: {...this.state.loggedInUser, reports: loggedInUserReports},
//           reports: newReports
//         })
//       })
//     }
// }


  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <CssBaseline />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/login' component={Login} />
                <Route path='/dashboard' component={Dashboard} />
                <Route path='/reports/:id/edit' component={EditReportForm} />
                <Route path='/signup' component={Signup} />
                <Route path='/newreport' component={NewReport} />
              </Switch>
        </div>
    </BrowserRouter>
    );
  }
}

export default App;
