import React, { useState } from 'react';
import axios from 'axios';

function Login(props) {

    const [userval, changeUserVal] = useState('');
    const [passval, changePassVal] = useState('');
    const [state, editState] = useState('standard');

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
            case 'blank-field':
                props.logUser('');
                editState('blank-field');
                break;
            case 'failed':
                props.logUser('');
                editState('wrong');
                break;
        }
    }

    switch (state) {
        case 'standard':
            return (
                <center>
                    <h3 className="page-header">Login to myLife V2</h3>
                    <div className="login-content">
                        <form>
                            <input className="log standard" type="text" onChange={typeUser} value={userval} placeholder="Username"></input>
                            <input className="log standard" type="password" onChange={typePass} value={passval} placeholder="Password"></input>
                            <button className="btn-log" type="submit" onClick={login}>Login</button>
                            <br />
                            <button className="btn-logout" onClick={props.register}>Don't have an account? Register here.</button>
                        </form>
                    </div>
                </center>
            );
        case 'blank-field':
            return (
                <center>
                    <h3 className="page-header">Login to myLife V2</h3>
                    <div className="login-content">
                        <form>
                            <p className="msg-err">Please fill out all highlighted fields to continue</p>
                            <input className="log error" type="text" onChange={typeUser} value={userval} placeholder="Username"></input>
                            <input className="log error" type="password" onChange={typePass} value={passval} placeholder="Password"></input>
                            <button className="btn-log" type="submit" onClick={login}>Login</button>
                            <br />
                            <button className="btn-logout" onClick={props.register}>Don't have an account? Register here.</button>
                        </form>
                    </div>
                </center>
            );
        case 'wrong':
            return (
                <center>
                    <h3 className="page-header">Login to myLife V2</h3>
                    <div className="login-content">
                        <form>
                            <p className="msg-err">Invalid login credentials</p>
                            <input className="log standard" type="text" onChange={typeUser} value={userval} placeholder="Username"></input>
                            <input className="log standard" type="password" onChange={typePass} value={passval} placeholder="Password"></input>
                            <button className="btn-log" type="submit" onClick={login}>Login</button>
                            <br />
                            <button className="btn-logout" onClick={props.register}>Don't have an account? Register here.</button>
                        </form>
                    </div>
                </center>
            );
    }

}

export default Login;