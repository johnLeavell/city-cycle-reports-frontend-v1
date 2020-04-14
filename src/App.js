import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import ReportsContainer from './components/Reports/ReportsContainer'
import NewReports from './components/Reports/NewReports'
import Dashboard from './components/Dashboard';
// have funciton loginuser to update the app

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


  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
            <Switch>
              <Route exact path='/' render={ (props) => <Home {...props} reports={this.state.reports} /> } />
              {/* <Route path='/about' component={About}/> */}
              <Route path='/login' render={ (props) => <Login {...props} handleUserLogin={this.handleUserLogin} /> } />
              <Route path='/signup' component={Signup} />
              <Route path='/dashboard' render={ (props) => <Dashboard {...props} users={this.state.users} loggedInUser={this.state.loggedInUser} /> }  />
              <Route path='/newreport' component={NewReports} />
              
            </Switch>
        </div>
    </BrowserRouter>
    );
  }
}

export default App;
