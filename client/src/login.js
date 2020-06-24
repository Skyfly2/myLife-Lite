import React, { useState } from 'react';

function Login(props) {
    const [userval, changeUserVal] = useState('');
    const [passval, changePassVal] = useState('');

    const typeUser = e => {
        changeUserVal(e.target.value);
    }

    const typePass = e => {
        changePassVal(e.target.value);
    }
    return (
        <div className="login-content">
            <center>
                <h3 className="page-header">Login to myLife V2</h3>
                <form>
                    <input className="log" type="text" onChange={typeUser} value={userval} placeholder="Username"></input>
                    <input className="log" type="password" onChange={typePass} value={passval} placeholder="Password"></input>
                    <button className="btn-log" type="submit" onClick={props.login}>Login</button>
                    <br />
                    <button className="btn-logout" onClick={props.register}>Don't have an account? Register here.</button>
                </form>
            </center>
        </div>
    );
}

export default Login;