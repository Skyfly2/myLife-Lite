import React, { useState } from 'react';
import Calendar from 'react-calendar';
import axios from 'axios';

function Createtask(props) {
    const [taskName, changeName] = useState('');
    const [desc, changeDesc] = useState('');
    const [date, changeDate] = useState(null);
    const [state, changeState] = useState('standard');

    const create = async e => {
        let res = await axios.post('http://localhost:4000/create', {
            name: taskName,
            date: date,
            desc: desc,
            user: props.user
        });
        if (res.data) {
            if (res.data.status === 'success') {
                props.back();
            }
        }
        else {
            changeState('failed');
        }
    }

    switch (state) {
        case 'standard':
            return (
                <div className="content">
                    <div className="feature-bar">
                        <button className="btn-logout" onClick={props.back}>{'<'}</button>
                        <div className="title">
                            <p>Create Task</p>
                        </div>
                    </div>
                    <center>
                        <form className="fade">
                            <input className="log standard" type="text" placeholder="Task name" value={taskName} onChange={e => {
                                changeName(e.target.value);
                            }}></input>
                            <br />
                            <textarea className="log area" placeholder="Description" value={desc} onChange={e => {
                                changeDesc(e.target.value);
                            }}></textarea>
                            <br />
                            <Calendar className="calendar" onChange={val => {
                                changeDate(val);
                            }} value={date} />
                        </form>
                        <button className="btn-log" onClick={create} >Create</button>
                    </center>
                </div>
            );
        case 'failed':
            return (
                <div className="content">
                    <div className="feature-bar">
                        <button className="btn-logout" onClick={props.back}>{'<'}</button>
                        <div className="title">
                            <p>Create Task</p>
                        </div>
                    </div>
                    <center>
                        <p className="msg-err">Task creation failed. Try again later</p>
                        <form>
                            <input className="log standard" type="text" placeholder="Task name" value={taskName} onChange={e => {
                                changeName(e.target.value);
                            }}></input>
                            <br />
                            <textarea className="log area" placeholder="Description" value={desc} onChange={e => {
                                changeDesc(e.target.value);
                            }}></textarea>
                            <br />
                            <Calendar className="calendar" onChange={val => {
                                changeDate(val);
                            }} value={date} />
                        </form>
                        <button className="btn-log" onClick={create} >Create</button>
                    </center>
                </div>
            );
    }

}

export default Createtask;