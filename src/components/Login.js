import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


class Login extends Component {

  state = {
    user: "",
    // password: "",
    rememberMe: false
  }
   
  componentDidMount() {
    const rememberMe = localStorage.getItem('rememberMe') === 'true';
    const user = rememberMe ? localStoreage.getItem('user')
  }
 

  handleChange = e => {
    const input = e.target;
    const value = input.type === 'checkbox' ? input.checked : input.value;

    this.setState({
      [input.name]: value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    const { user, rememberMe } = this.state;
    localStorage.setItem('rmemberMe', rememberMe);
    localStorage.setItem('user', rememberMe ? user : '');
    this.props.history.push('/');
  };

  render(){
    console.log(this.state)
    return (
      <Container component="main" maxWidth="xs">
        <div>
          <form onSubmit={this.handleSubmit} >
            <TextField
              onChange={this.handleChange}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              onChange={this.handleChange}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Log In
            </Button>
            <label>
              <input 
                name="rememberMe" 
                checked={this.state.rememberMe} 
                onChange={this.handleChange} 
                type="checkbox"
              /> Remember me
            </label>
            <Grid container>
              <Grid item xs>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

export default Login


 // handleUserLogin = (userLogin) => {
  //     const reqObj = {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(userLogin)
  //     }

  //     fetch('http://localhost:3000/api/v1/auth', reqObj)
  //     .then(resp => resp.json())
  //     .then(data => {
  //       localStorage.setItem("token", data.token)
      
  //     })
  // }

 // const reqObj = {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({username: e.username, password: e.password}, console.log(e.target.value))
    // }
    
    // fetch('http://localhost:3000/api/v1/login', reqObj)
    // .then( resp => resp.json())
    // .then( data => console.log( data))
    // this.setState({

    // })