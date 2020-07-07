import React, { useState } from 'react';
import Calendar from 'react-calendar';
import axios from 'axios';

function Edittask(props) {
    const [taskName, changeName] = useState(props.taskName);
    const [desc, changeDesc] = useState(props.taskDesc);
    const [date, changeDate] = useState(props.date);
    const [state, changeState] = useState('standard');

    const edit = async e => {
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
                            <input className="log standard" type="text" value={taskName} onChange={e => {
                                changeName(e.target.value);
                            }}>{taskName}</input>
                            <textarea className="log area" value={desc} onChange={e => {
                                changeDesc(e.target.value);
                            }}>{desc}</textarea>
                            <Calendar className="calendar" onChange={val => {
                                changeDate(val);
                            }} value={date} />
                        </form>
                        <button className="btn-log"  >Create</button>
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
                            <input className="log standard" type="text" value={taskName} onChange={e => {
                                changeName(e.target.value);
                            }}></input>
                            <textarea className="log area" value={desc} onChange={e => {
                                changeDesc(e.target.value);
                            }}></textarea>
                            <Calendar className="calendar" onChange={val => {
                                changeDate(val);
                            }} value={date} />
                        </form>
                        <button className="btn-log" >Create</button>
                    </center>
                </div>
            );
    }

}

export default Edittask;