import React from 'react';

class Login extends React.Component {
    state = {
        // TODO: What needs to be represented in state for a fully controlled form?
        name: "",
        username: "",
        password: "",
        confirmPassword: ""
    }

    // TODO: What methods need to be created for a fully controlled form?
    // HINT: Use the line below to change the view when the form is submitted
    // this.props.changeView('home')

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleConfirmPasswordChange = (event) => {
        this.setState({
            confirmPassword: event.target.value
        })
    }

    render(){
        // TODO: What additional attributes and event handlers are needed on each of the elements below?
        return (
            <form className="vertical-flex">
                <h2>Create an Account</h2>
                <input type="text" 
                name="name"
                placeholder="Name"
                onChange={(event) => this.handleNameChange(event)}
                value={this.state.name}
                />
                <input 
                type = "text"
                placeholder="Username"
                name = "username"
                onChange={(event) => this.handleUsernameChange(event)}
                value={this.state.username}
                />
                <input 
                type ="text"
                name="password"
                placeholder="Password"
                onChange={(event) => this.handlePasswordChange(event)}
                value={this.state.password}
                />
                <input 
                placeholder="Confirm Password"
                type = "text"
                name="confirmPassword"
                onChange={(event) => this.handleConfirmPasswordChange(event)}
                value={this.state.confirmPassword}
                />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Login;