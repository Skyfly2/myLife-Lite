import React, { useState } from 'react';

function Login(props) {
    return (
        <div className="login-content">
            <center>
                <h3 className="page-header">Login to myLife V2</h3>
                <form>
                    <input className="log" type="text" onChange={props.typeUser} value={props.userval} placeholder="Username"></input>
                    <input className="log" type="password" onChange={props.typePass} value={props.passval} placeholder="Password"></input>
                    <button className="btn-log" type="submit" onClick={props.login}>Login</button>
                    <br />
                    <button className="btn-logout" onClick={props.register}>Don't have an account? Register here.</button>
                </form>
            </center>
        </div>
    );
}

export default Login;