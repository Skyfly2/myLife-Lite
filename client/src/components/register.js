import React, { useState } from 'react';
import axios from 'axios';

function Register(props) {
    const [first, changeFirst] = useState('');
    const [last, changeLast] = useState('');
    const [user, changeUser] = useState('');
    const [pass, changePass] = useState('');
    const [confirmpass, changeCPass] = useState('');
    const [email, changeEmail] = useState('');
    const [state, editState] = useState('standard');

    const register = async e => {
        e.preventDefault();
        if (first === '' || last === '' || user === '' || pass === '' || confirmpass === '' || email === '') {
            editState('blank-field');
            return;
        }
        else if (pass != confirmpass) {
            editState('pass-no-match');
            return;
        }
        else {
            let res = await axios.post('http://localhost:4000/register', { user: user, password: pass, first: first, last: last, email: email });
            if (res.data.status == 'success') {
                props.logUser(user);
                props.setLogged();
            }
            else {
                editState('taken');
            }
        }
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

    switch (state) {
        case 'standard':
            return (
                <center>
                    <h3 className="page-header">Register a myLife account</h3>
                    <div className="login-content">
                        <form id="register">
                            <input className="log standard" type="text" onChange={editFirst} placeholder="Firstname" value={first}></input>
                            <br />
                            <input className="log standard" type="text" onChange={editLast} placeholder="Lastname" value={last}></input>
                            <br />
                            <input className="log standard" type="text" onChange={editEmail} placeholder="Email" value={email}></input>
                            <br />
                            <input className="log standard" type="text" onChange={editUser} placeholder="Username" value={user}></input>
                            <br />
                            <input className="log standard" type="password" onChange={editPass} placeholder="Password" value={pass}></input>
                            <br />
                            <input className="log standard" type="password" onChange={editCPass} placeholder="Confirm Password" value={confirmpass}></input>
                            <br />
                            <button className="btn-log" onClick={register}>Register</button>
                            <br />
                            <button className="btn-logout" onClick={props.login}>Already have an account? Login here.</button>
                        </form>
                    </div>
                </center>
            );
        case 'taken':
            return (
                <center>
                    <h3 className="page-header">Register a myLife account</h3>
                    <div className="login-content">
                        <p className="msg-err">Username is taken</p>
                        <form id="register">
                            <input className="log standard" type="text" onChange={editFirst} placeholder="Firstname" value={first}></input>
                            <input className="log standard" type="text" onChange={editLast} placeholder="Lastname" value={last}></input>
                            <input className="log standard" type="text" onChange={editEmail} placeholder="Email" value={email}></input>
                            <input className="log error" type="text" onChange={editUser} placeholder="Username" value={user}></input>
                            <input className="log standard" type="password" onChange={editPass} placeholder="Password" value={pass}></input>
                            <input className="log standard" type="password" onChange={editCPass} placeholder="Confirm Password" value={confirmpass}></input>
                            <button className="btn-log" onClick={register}>Register</button>
                            <br />
                            <button className="btn-logout" onClick={props.login}>Already have an account? Login here.</button>
                        </form>
                    </div>
                </center>
            );
        case 'blank-field':
            return (
                <center>
                    <h3 className="page-header">Register a myLife account</h3>
                    <div className="login-content">
                        <p className="msg-err">Please fill out all of the highlighted fields</p>
                        <form id="register">
                            <input className="log error" type="text" onChange={editFirst} placeholder="Firstname" value={first}></input>
                            <input className="log error" type="text" onChange={editLast} placeholder="Lastname" value={last}></input>
                            <input className="log error" type="text" onChange={editEmail} placeholder="Email" value={email}></input>
                            <input className="log error" type="text" onChange={editUser} placeholder="Username" value={user}></input>
                            <input className="log error" type="password" onChange={editPass} placeholder="Password" value={pass}></input>
                            <input className="log error" type="password" onChange={editCPass} placeholder="Confirm Password" value={confirmpass}></input>
                            <button className="btn-log" onClick={register}>Register</button>
                            <br />
                            <button className="btn-logout" onClick={props.login}>Already have an account? Login here.</button>
                        </form>
                    </div>
                </center>
            );
        case 'pass-no-match':
            return (
                <center>
                    <h3 className="page-header">Register a myLife account</h3>
                    <div className="login-content">
                        <p className="msg-err">Passwords do not match</p>
                        <form id="register">
                            <input className="log standard" type="text" onChange={editFirst} placeholder="Firstname" value={first}></input>
                            <input className="log standard" type="text" onChange={editLast} placeholder="Lastname" value={last}></input>
                            <input className="log standard" type="text" onChange={editEmail} placeholder="Email" value={email}></input>
                            <input className="log standard" type="text" onChange={editUser} placeholder="Username" value={user}></input>
                            <input className="log error" type="password" onChange={editPass} placeholder="Password" value={pass}></input>
                            <input className="log error" type="password" onChange={editCPass} placeholder="Confirm Password" value={confirmpass}></input>
                            <button className="btn-log" onClick={register}>Register</button>
                            <br />
                            <button className="btn-logout" onClick={props.login}>Already have an account? Login here.</button>
                        </form>
                    </div>
                </center>
            );
    }

}

export default Register;