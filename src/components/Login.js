import React, { Component } from 'react'

export class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: "",
      password: ""
    }
  }

  handleInputChange = e => {
    // console.log(e.target)
    const { value, name } = e.target
    this.setState({
      [name]:value
    })
  }

  handleSubmit = e => {
    e.preventDefualt()

    this.setState({
      username: "",
      password: ""
    })

    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }

    fetch('http://localhost:3000/api/v1/auth', reqObj)
    .then(resp => resp.json())
    .then(user => {
      this.props.history.push('/about')
      // redirect to about page
    })
  }


  render() {
    return (
      <div>
        <h3>Sign in</h3>
          <form onSubmit={this.handleSubmit}>
            <input name={'username'} 
            onChange={this.handleInputChange} 
            value={this.state.username} 
            />
            <input type="password" 
            name={'password'} 
            onChange={this.handleInputChange} 
            value={this.state.password} />
            <input 
            type='submit' 
            value='login'
            />
          </form>
      </div>
    )
  }
}

export default Login
