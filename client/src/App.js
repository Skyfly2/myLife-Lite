import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import Login from './components/login';
import Register from './components/register';
import Itemlist from './components/itemlist';

function App() {
  const [rank, changeRank] = useState('none');
  const [username, logUser] = useState('');

  const logout = e => {
    e.preventDefault();
    changeRank('none');
    logUser('');
  }

  const setUser = val => {
    logUser(val);
  }

  const setLogged = () => {
    changeRank('logged');
    return;
  }

  if (rank === 'none') {
    const register = e => {
      e.preventDefault();
      changeRank('register');
    }
    return (
      <Login register={register} logUser={setUser} setLogged={setLogged} />
    );
  }
  else if (rank === 'register') {
    return (
      <Register logUser={setUser} setLogged={setLogged} />
    );
  }
  else if (rank === 'logged') {
    return (
      <div className="content">
        <button className="btn-logout" onClick={logout}>{'<Logout'}</button>
        <Itemlist />
      </div>
    );
  }
}

export default App;
