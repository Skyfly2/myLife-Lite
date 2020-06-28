import React, { useState } from 'react';
import axios from 'axios';

function Login(props) {

    const [userval, changeUserVal] = useState('');
    const [passval, changePassVal] = useState('');

    const typeUser = e => {
        changeUserVal(e.target.value);
    }

    const typePass = e => {
        changePassVal(e.target.value);
    }

    const login = async e => {
        e.preventDefault();
        let res = await axios.post('http://localhost:4000/login', {
            user: userval,
            password: passval
        });
        switch (res.data.status) {
            case 'success':
                props.logUser(userval);
                props.setLogged();
                break;
            case 'failed-error':
                props.logUser('');
                break;
            case 'failed':
                props.logUser('');
                break;
        }
    }

    return (
        <center>
            <h3 className="page-header">Login to myLife V2</h3>
            <div className="login-content">
                <form>
                    <input className="log" type="text" onChange={typeUser} value={userval} placeholder="Username"></input>
                    <input className="log" type="password" onChange={typePass} value={passval} placeholder="Password"></input>
                    <button className="btn-log" type="submit" onClick={login}>Login</button>
                    <br />
                    <button className="btn-logout" onClick={props.register}>Don't have an account? Register here.</button>
                </form>
            </div>
        </center>
    );
}

export default Login;