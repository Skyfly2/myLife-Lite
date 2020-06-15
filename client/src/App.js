import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [rank, changeRank] = useState('none');
  const [userval, changeUserVal] = useState('');
  const [passval, changePassVal] = useState('');
  const [username, logUser] = useState('');

  const logout = e => {
    e.preventDefault();
    changeRank('none');
    changeUserVal('');
    changePassVal('');
    logUser('');
  }

  const login = e => {
    let conditions = true;
    if (conditions) {
      changeRank('logged');
      logUser(userval);
    }
  }

  const register = e => {
    e.preventDefault();
    return;
  }

  if (rank === 'none') {
    const register = e => {
      e.preventDefault();
      changeRank('register');
    }


    return (
      <div className="login-content">
        <center>
          <h3 className="page-header">Login to myLife V2</h3>
          <form>
            <input className="log" type="text" value={userval} placeholder="Username"></input>
            <input className="log" type="password" value={passval} placeholder="Password"></input>
            <button className="btn-log" type="submit" onClick={login}>Login</button>
            <br />
            <button className="btn-logout" onClick={register}>Don't have an account? Register here.</button>
          </form>
        </center>
      </div>
    )
  }
  else if (rank === 'register') {
    // This will be its own module soon
    // const [first, changeFirst] = useState('');
    // const [last, changeLast] = useState('');
    // const [user, changeUser] = useState('');
    // const [pass, changePass] = useState('');
    // const [confirmpass, changeCPass] = useState('');
    const login = e => {
      e.preventDefault();
      changeRank('none');
    }
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
            <button className="btn-log" type="submit" onClick={register}>Register</button>
            <br />
            <button className="btn-logout" onClick={login}>Already have an account? Login here.</button>
          </form>
        </center>
      </div>
    )
  }
  else {
    return (
      <div className="content">
        <button className="btn-logout" onClick={logout}>{'<Logout'}</button>
      </div>
    )
  }
}

export default App;
