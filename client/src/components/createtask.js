import React, { useState } from 'react';
import axios from 'axios';

function Createtask(props) {
    const [taskName, changeName] = useState('');
    const [desc, changeDesc] = useState('');
    const [date, changeDate] = useState(Date.now());

    const create = e => {

    }

    return (
        <div className="content">
            <div className="feature-bar">
                <button className="btn-logout" onClick={props.back}>{'<'}</button>
                <div className="title">
                    <p>Create Task</p>
                </div>
            </div>
            <center>
                <form>
                    <input className="log standard" type="text" placeholder="Task name" value={taskName} onChange={e => {
                        changeName(e.target.value);
                    }}></input>
                    <textarea className="log area" placeholder="Description" value={desc} onChange={e => {
                        changeDesc(e.target.value);
                    }}></textarea>
                </form>
                <button className="btn-log" onClick={create} >Create</button>
            </center>
        </div>
    );
}

export default Createtask;