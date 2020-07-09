import React, { useState } from 'react';
import Calendar from 'react-calendar';
import axios from 'axios';

function Edittask(props) {
    const [name, changeName] = useState(props.taskName);
    const [desc, changeDesc] = useState(props.taskDesc);
    const [date, changeDate] = useState(null);
    const [newDate, changenewDate] = useState(null);
    const [state, changeState] = useState('standard');

    const edit = async e => {
        let res = await axios.put('http://localhost:4000/update', {
            name: name,
            date: date,
            desc: desc,
            id: props.id
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
                            <p>Edit Task</p>
                        </div>
                    </div>
                    <center>
                        <form className="fade">
                            <textarea className="log standard" value={name} onChange={e => {
                                changeName(e.target.value);
                            }}>{name}</textarea>
                            <br />
                            <textarea className="log area" value={desc} onChange={e => {
                                changeDesc(e.target.value);
                            }}>{desc}</textarea>
                            <br />
                            {/* <h1>{date}</h1> */}
                            <Calendar className="calendar" onChange={val => {
                                changeDate(val);
                            }} value={date} />
                        </form>
                        <button className="btn-log" onClick={edit} >Update</button>
                    </center>
                </div>
            );
        case 'failed':
            return (
                <div className="content">
                    <div className="feature-bar">
                        <button className="btn-logout" onClick={props.back}>{'<'}</button>
                        <div className="title">
                            <p>Edit Task</p>
                        </div>
                    </div>
                    <center>
                        <p className="msg-err">Task edit failed. Try again later</p>
                        <form>
                            <textarea className="log standard" value={name} onChange={e => {
                                changeName(e.target.value);
                            }}>{name}</textarea>
                            <br />
                            <textarea className="log area" value={desc} onChange={e => {
                                changeDesc(e.target.value);
                            }}></textarea>
                            <br />
                            <Calendar className="calendar" onChange={val => {
                                changeDate(val);
                                changenewDate(val);
                            }} value={newDate} />
                        </form>
                        <button className="btn-log" onClick={edit} >Create</button>
                    </center>
                </div>
            );
    }

}

export default Edittask;