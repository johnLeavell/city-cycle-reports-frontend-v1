import React, { Component } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';

//   const classes = useStyles();
const formValid = ({ formErrors, ...rest }) => {
    let valid = true;
    // validate form errors being empty
    Object.values(formErrors).forEach(  val => {
        val.length > 0 && (valid = false);
    });
    // validate the form was filled out
    Object.values(rest).forEach(val => {
        val == null && (valid = false);
    });
    return valid;
}

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );

export class Signup extends Component {
    constructor(){
        super();
        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            username: "",
            password: "",
            confirmPassword: "",
            formErrors: {
                firstname: "",
                lastname: "",
                email: "",
                username: "",
                password: "",
                confirmPassword: ""
            }
        }
    }

    handleInputChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        
        let formErrors = this.state.formErrors;

        console.log("Name: ", name)
        console.log("Value: ", value);

        switch (name) {
            case 'firstname':
                formErrors.firstname = 
                    value.length < 3 ? 'minimum 3 characters reuired' :"";
                break;
            case 'lastname':
                    formErrors.lastname = 
                    value.length < 3 ? 'minimum 3 characters reuired' :"";
                break;
            case 'email':
                    formErrors.email = 
                    emailRegex.test(value)
                    ? ""
                    : "invalid email address";
                break;
            case 'password':
                    formErrors.password = 
                    value.length < 6 ? "minimum 6 characters required" : "";
                break;
            case 'confirmPassword':
                formErrors.confirmpassword = 
                value.length < 6 ? 'passwords do not match'
                : "";
                break
                    default:
                        break;    
                }
            this.setState({
                formErrors, [name]: value }, () => console.log(this.state));
        }

    checkPasswordConfirmation = () => {
        if (this.state.password === this.state.confirmPassword){
            return true
        } else {
            return false
        }
    }

   

    handleSubmit = e => {
        e.preventDefault();
        this.checkPasswordConfirmation()
        if (formValid(this.state)) {
            console.log(`
              --SUBMITTING--
              First Name: ${this.state.firstname}
              Last Name: ${this.state.lastname}
              Email: ${this.state.email}
              Password: ${this.state.password}
            `);
          } else {
            console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
          }
        
        
	    const reqObj = {
	        method: 'POST',
	        headers: {
	            'Content-Type': 'application/json',
	            'Accept': 'application/json'
	        },
	        body: JSON.stringify(this.state)
	    }

	    fetch('http://localhost:3000/api/v1/users', reqObj)
			.then(resp => resp.json())
			.then(user => {
				if (!user.error) {
					// this.props.loginUser(user)
					this.props.history.push('/dashboard')
				} else {
					alert(user.error)
					this.resetForm()
				}
			})

	    this.setState({
	        username: "",
            password: "",
            firstname: "",
            lastname: "",
            email: ""
	    })
	}

	resetForm = () => {
		this.setState({
			username: '',
			password: '',
			confirmPassword: '',
			firstname: '',
			lastname: '',
			email: ''
		})
    }
   
    render() {

        return (
            <div >
                <h1>Create Account</h1>
                <form onSubmit={this.handleSubmit} autoComplete="off">
                    <div className="firstName">
                        <label htmlFor="firstname">First Name</label>
                        <input 
                        type="text"
                        className=""
                        placeholder="First Name"
                        name="firstname"
                        value={this.state.firstname}
                        onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="lastName">
                        <label htmlFor="lastname">Last Name</label>
                        <input 
                        type="text"
                        className=""
                        placeholder="Last Name"
                        name="lastname"
                        value={this.state.lasttname}
                        onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input 
                        type="text"
                        className=""
                        placeholder="Email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="username">
                        <label htmlFor="username">Username</label>
                        <input 
                        type="text"
                        className=""
                        placeholder="Username"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="password">
                        <label htmlFor="password">password</label>
                        <input 
                        type="password"
                        className=""
                        placeholder="Password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="confirmPassword">
                        <label htmlFor="comfirmPassword">Confirm Password</label>
                        <input 
                        type="password"
                        className=""
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        value={this.state.confirmPassword}
                        onChange={this.handleInputChange}
                        />
                        <div className="createAccount">
                            <Button color="primary" type="submit">Create Account</Button>
                            <small>Already have an Account?</small>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Signup
