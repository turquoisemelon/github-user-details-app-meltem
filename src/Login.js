import React, { Component } from 'react';

class Login extends Component {
    render() {
        return <form>
            <label>Username</label>
            <input type="text" name="username" />
            <button>Submit</button>
        </form>
    }
}

export default Login;