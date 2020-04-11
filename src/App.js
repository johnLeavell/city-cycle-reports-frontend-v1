import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import ReportsContainer from './components/Reports/ReportsContainer'
import NewReports from './components/Reports/NewReports'
// have funciton loginuser to update the app

class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
            <Switch>
              <Route exact path='/' component={Home} />
              {/* <Route path='/about' component={About}/> */}
              <Route path='/login' component={Login} />
              <Route path='/signup' component={Signup} />
              <Route path='/dashboard' component={ReportsContainer} />
              <Route path='/newreport' component={NewReports} />
            </Switch>
        </div>
    </BrowserRouter>
    );
  }
}

export default App;
