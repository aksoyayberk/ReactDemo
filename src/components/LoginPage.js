import React from 'react';
import {Redirect} from 'react-router-dom';

class LoginPage extends React.Component {

    //this is another random comment
    //and this comment is to be merged with alpha
    
    state = {
        loggedIn: false,
        username: "",
        password: ""
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.checkCredentials()
    }

    checkCredentials = () => {
        const defaultName = "admin";
        const defaultPassword = "admin";
        if(this.state.username === defaultName && this.state.password === defaultPassword)
            this.setState({loggedIn: true});
    }

    render(){
        if (this.state.loggedIn === true) 
            return <Redirect to='/main' />
        
        return (
            <div>
                <header style={headerStyle}>
                    <h1>Login Page</h1>
                </header>
                <form style={formStyle} onSubmit={this.handleSubmit}>
                    <input id="username" type="text" name="username" placeholder="username" onChange={e => this.setState({[e.target.name]: e.target.value})}/>
                    <br/>
                    <input id="password" type="password" name="password" placeholder="password" onChange={e => this.setState({[e.target.name]: e.target.value})}/>
                    <br/>
                    <input type="submit" value="Login"/>
                </form>
            </div>
        );
    }
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
}
const formStyle = {
    textAlign: 'center',
    padding: '10px',
}

export default LoginPage;
