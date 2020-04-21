import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import NewReport from './components/Reports/NewReport'
import EditReportForm from './components/Reports/EditReportForm'
import CssBaseline from '@material-ui/core/CssBaseline';


const API = 'http://localhost:3000/api/v1/'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
        users: [],
        loggedInUser: {
          reports: []
        },
        reports: []
    }
  }

  componentDidMount = () => {
        this.fetchUsers()
        this.fetchReports()
  }

  fetchUsers = () => {
      fetch(API + "users")
      .then( resp => resp.json())
      .then( users => 
          this.setState({
          users: users}))
  }

  fetchReports = () => {
      fetch(API + "reports")
      .then( resp => resp.json())
      .then( reports => 
          this.setState({
          reports: reports}))
  }


  handleUserLogin = (userLogin) => {
      const reqObj = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userLogin)
      }

      fetch('http://localhost:3000/api/v1/auth', reqObj)
      .then(resp => resp.json())
      .then(user => {
        this.setState({
          loggedInUser: user
        });
      })
  }

  handleDeleteReport = (e, clickedReport) => {
    const confirmation = window.confirm('Are you sure you want to delete this report?');

    if(confirmation) {
      fetch(`http://localhost:3000/api/v1/reports/${clickedReport.id}`, {method: "DELETE"})
      .then( resp => resp.json())
      .then( deletedReport => {
        const newReports = this.state.reports.filter(report => report.id !== deletedReport.id);
        const loggedInUserReports = this.state.loggedInUser.reports.filter(report => report.id !== deletedReport.id)
          this.setState({
          loggedInUser: {...this.state.loggedInUser, reports: loggedInUserReports},
          reports: newReports
        })
      })
    }
  }

  handleEditReport = (e, clickedReport) => {
    e.preventDefault()

    const reqObj = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        },
      body: JSON.stringify({
        ...this.state
      })
    }

    const confirmation = window.confirm('Are you sure you want to edit this report?');
      
    if(confirmation) {
      fetch(`http://localhost:3000/api/v1/reports/${clickedReport.id}`, reqObj )
      .then( resp => resp.json())
      .then( editedReport => {
        
      const newReports = this.state.reports.filter(report => report.id !== editedReport.id);
        
      const loggedInUserReports = this.state.loggedInUser.reports.filter(report => report.id !== editedReport.id)
        this.setState({
          loggedInUser: {...this.state.loggedInUser, reports: loggedInUserReports},
          reports: newReports
        })
      })
    }
}


  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <CssBaseline />
            <Navbar />
              <Switch>
                <Route exact path='/' render={ (props) => <Home {...props} reports={this.state.reports} /> } />
                <Route path='/login' render={ (props) => <Login {...props} handleUserLogin={this.handleUserLogin} /> } />
                <Route path='/dashboard' render={ (props) => <Dashboard {...props} handleEditReport={this.handleEditReport} handleDeleteReport={this.handleDeleteReport} users={this.state.users} loggedInUser={this.state.loggedInUser}  /> }  />
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
