import React, { useState } from 'react';

function Register(props) {
    const [first, changeFirst] = useState('');
    const [last, changeLast] = useState('');
    const [user, changeUser] = useState('');
    const [pass, changePass] = useState('');
    const [confirmpass, changeCPass] = useState('');

    return (
        <div className="login-content">
            <center>
                <h3 className="page-header">Register a myLife V2 account</h3>
                <form>
                    <input className="log" type="text" placeholder="Firstname"></input>
                    <input className="log" type="text" placeholder="Lastname"></input>
                    <input className="log" type="text" placeholder="Username"></input>
                    <input className="log" type="password" placeholder="Password"></input>
                    <input className="log" type="password" placeholder="Confirm Password"></input>
                    <button className="btn-log" type="submit" onClick={props.register}>Register</button>
                    <br />
                    <button className="btn-logout" onClick={props.login}>Already have an account? Login here.</button>
                </form>
            </center>
        </div>
    );
}

export default Register;