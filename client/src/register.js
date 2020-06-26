import React, { useState } from 'react';
import axios from 'axios';

function Register(props) {
    const [first, changeFirst] = useState('');
    const [last, changeLast] = useState('');
    const [user, changeUser] = useState('');
    const [pass, changePass] = useState('');
    const [confirmpass, changeCPass] = useState('');
    const [email, changeEmail] = useState('');

    const register = async (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/register', { user: user, password: pass, first: first, last: last, email: email })
            .then(res => console.log(res))
            .catch(err => console.log(err));
        props.register();
    }

    const editFirst = e => {
        changeFirst(e.target.value);
    }

    const editLast = e => {
        changeLast(e.target.value);
    }

    const editUser = e => {
        changeUser(e.target.value);
    }

    const editPass = e => {
        changePass(e.target.value);
    }

    const editCPass = e => {
        changeCPass(e.target.value);
    }

    const editEmail = e => {
        changeEmail(e.target.value);
    }

    return (
        <div className="login-content">
            <center>
                <h3 className="page-header">Register a myLife V2 account</h3>
                <form id="register">
                    <input className="log" type="text" onChange={editFirst} placeholder="Firstname" value={first}></input>
                    <input className="log" type="text" onChange={editLast} placeholder="Lastname" value={last}></input>
                    <input className="log" type="text" onChange={editEmail} placeholder="Email" value={email}></input>
                    <input className="log" type="text" onChange={editUser} placeholder="Username" value={user}></input>
                    <input className="log" type="password" onChange={editPass} placeholder="Password" value={pass}></input>
                    <input className="log" type="password" onChange={editCPass} placeholder="Confirm Password" value={confirmpass}></input>
                    <button className="btn-log" onClick={register}>Register</button>
                    <br />
                    <button className="btn-logout" onClick={props.login}>Already have an account? Login here.</button>
                </form>
            </center>
        </div>
    );
}

export default Register;