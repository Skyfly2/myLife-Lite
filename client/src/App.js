import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import 'react-calendar/dist/Calendar.css'
import Login from './components/login';
import Register from './components/register';
import Itemlist from './components/itemlist';
import Featurebar from './components/featurebar';
import Createtask from './components/createtask';
import Calendar from 'react-calendar';

function App() {
  const [rank, changeRank] = useState('none');
  const [username, logUser] = useState('');
  const [date, changeDate] = useState(null);

  switch (rank) {
    case 'none':
      return (
        <Login
          register={e => {
            e.preventDefault();
            changeRank('register');
          }}
          logUser={val => {
            logUser(val);
          }}
          setLogged={() => {
            changeRank('logged');
            return;
          }} />
      );
    case 'register':
      return (
        <Register
          logUser={val => {
            logUser(val);
          }}
          setLogged={e => {
            e.preventDefault();
            changeRank('logged');
            return;
          }}
          login={e => {
            e.preventDefault();
            changeRank('none');
          }} />
      );
    case 'logged':
      return (
        <div className="content">
          <Featurebar
            logout={e => {
              e.preventDefault();
              changeRank('none');
              logUser('');
              changeDate(null)
            }}
            create={e => {
              e.preventDefault();
              changeRank('create');
            }} />
          <Itemlist user={username} date={date} viewAll={e => {
            changeDate(null);
          }} />
          <center>
            <Calendar className="calendar fade" onChange={val => {
              changeDate(val);
            }} value={date} />
          </center>

        </div>
      );
    case 'create':
      return (
        <Createtask
          back={() => {
            changeRank('logged');
          }} user={username} />
      );
  }
}

export default App;
