import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Item from './components/item';
import './App.css';
import 'react-calendar/dist/Calendar.css'
import Login from './components/login';
import Register from './components/register';
import Itemlist from './components/itemlist';
import Featurebar from './components/featurebar';
import Createtask from './components/createtask';
import Calendar from 'react-calendar';
import Edittask from './components/edittask';
import Viewtask from './components/viewtask';

function App() {
  const [rank, changeRank] = useState('none');
  const [username, logUser] = useState('');
  const [date, changeDate] = useState(null);
  const [items, updateItems] = useState([]);
  const [editOption, changeEdit] = useState(null);
  const [viewOption, changeView] = useState(null);

  let newItems = [];
  useEffect(() => {
    axios.get('http://localhost:4000/gettasks', {
      params: {
        user: username,
        date: date
      }
    }).then(res => {
      for (let c = 0; c < res.data.names.length; c++) {
        newItems.push(<Item name={res.data.names[c]} date={res.data.dates[c]} desc={res.data.desc[c]} id={res.data.ids[c]} key={c} comp={complete} edit={() => {
          changeRank('edit-task');
          changeEdit({
            num: c,
            name: res.data.names[c],
            date: res.data.dates[c],
            desc: res.data.desc[c],
            id: res.data.ids[c]
          });
        }} view={() => {
          changeRank('view-task');
          changeView({
            num: c,
            name: res.data.names[c],
            date: res.data.dates[c],
            desc: res.data.desc[c],
          });
        }} />)
      }
      updateItems(newItems);
      return;
    });
  });

  const complete = id => {
    axios.delete('http://localhost:4000/complete', {
      params: {
        id: id
      }
    }).catch(err => console.log(err));
  }

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
          <Itemlist user={username} date={date} items={items} viewAll={e => {
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
    case 'edit-task':
      return (
        <div>
          <Edittask taskDesc={editOption.desc} taskName={editOption.name} date={editOption.date} id={editOption.id} back={() => {
            changeRank('logged');
          }} />
        </div>
      );
    case 'view-task':
      return (
        <div>
          <Viewtask taskDesc={viewOption.desc} name={viewOption.name} date={viewOption.date} back={() => {
            changeRank('logged');
          }} />
        </div>
      )
  }
}

export default App;
