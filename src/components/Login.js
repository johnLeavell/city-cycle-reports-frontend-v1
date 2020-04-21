import React, { Component } from 'react'

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: "",
      password: ""
    }
  }

  handleInputChange = e => {
    const { value, name } = e.target
    this.setState({
      [name]:value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.handleUserLogin(this.state)
    this.setState({
      username: "",
      password: ""
    })
    this.props.history.push('/dashboard')
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
