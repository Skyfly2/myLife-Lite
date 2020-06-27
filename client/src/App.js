import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import Login from './login';
import Register from './register';
import Dashboard from './dashboard';

function App() {
  const [rank, changeRank] = useState('none');
  const [username, logUser] = useState('');
  const [userval, changeUserVal] = useState('');
  const [passval, changePassVal] = useState('');

  const typeUser = e => {
    changeUserVal(e.target.value);
  }

  const typePass = e => {
    changePassVal(e.target.value);
  }

  const logout = e => {
    e.preventDefault();
    changeRank('none');
    logUser('');
  }

  const login = async e => {
    e.preventDefault();
    let res = await axios.post('http://localhost:4000/login', {
      user: userval,
      password: passval
    });
    switch (res.data.status) {
      case 'success':
        logUser(userval);
        changeRank('logged');
        break;
      case 'failed-error':
        logUser('');
        changeRank('none');
        break;
      case 'failed':
        logUser('');
        changeRank('none');
        break;
    }
  }

  const register = () => {
    changeRank('none');
    return;
  }

  if (rank === 'none') {
    const register = e => {
      e.preventDefault();
      changeRank('register');
    }
    return (
      <Login register={register} login={login} typeUser={typeUser} typePass={typePass} userval={userval} passval={passval} />
    );
  }
  else if (rank === 'register') {
    const login = e => {
      e.preventDefault();
      changeRank('none');
    }
    return (
      <Register register={register} login={login} />
    );
  }
  else if (rank === 'logged') {
    return (
      <div className="content">
        <button className="btn-logout" onClick={logout}>{'<Logout'}</button>
        <Dashboard />
      </div>
    );
  }
}

export default App;
