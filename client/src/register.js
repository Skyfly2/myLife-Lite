import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Register(props) {
    const [first, changeFirst] = useState('');
    const [last, changeLast] = useState('');
    const [user, changeUser] = useState('');
    const [pass, changePass] = useState('');
    const [confirmpass, changeCPass] = useState('');


    useEffect(() => {

        // axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => { console.log(res) });


    });
    const register = async (e) => {
        // e.preventDefault();
        axios.post('http://localhost:4000/register', { user: user, password: pass, first: first, last: last, email: '' })
            .then(res => console.log(res))
            .catch(err => console.log(err));
        // props.register();
    }

    return (
        <div className="login-content">
            <center>
                <h3 className="page-header">Register a myLife V2 account</h3>
                <form id="register">
                    <input className="log" id="first" type="text" placeholder="Firstname" value='hello'></input>
                    <input className="log" id="last" type="text" placeholder="Lastname" value='hello'></input>
                    <input className="log" id="user" type="text" placeholder="Username" value='hello'></input>
                    <input className="log" id="pass" type="password" placeholder="Password" value='hello'></input>
                    <input className="log" type="password" placeholder="Confirm Password" value='hello'></input>
                    <button className="btn-log" onClick={register}>Register</button>
                    <br />
                    <button className="btn-logout" onClick={props.login}>Already have an account? Login here.</button>
                </form>
            </center>
        </div>
    );
}

export default Register;