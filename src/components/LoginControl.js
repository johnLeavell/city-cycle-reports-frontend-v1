import React from 'react';

class LoginControl extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }

    handleLoginClick(){
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick(){
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />
        }
        return(
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                hello from LoginControl
            </div>
        ) 
    }
}

export default LoginControl;