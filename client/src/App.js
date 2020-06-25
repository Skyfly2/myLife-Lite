import React, { useState } from 'react';
import './App.css';
import Login from './login';
import Register from './register';
import Dashboard from './dashboard';

function App() {
  const [rank, changeRank] = useState('none');
  const [username, logUser] = useState('');

  const logout = e => {
    e.preventDefault();
    changeRank('none');
    // changeUserVal('');
    // changePassVal('');
    logUser('');
  }

  const login = e => {
    let conditions = true;
    if (conditions) {
      changeRank('logged');
      // logUser(userval);
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
      <Login register={register} login={login} />
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
