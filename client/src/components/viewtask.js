import React from 'react';

function Viewtask(props) {
    return (
        <div className="content">
            <div className="feature-bar">
                <button className="btn-logout" onClick={props.back}>{'<'}</button>
                <div className="title">
                    <p>{props.name}</p>
                </div>
            </div>
            <center>
                <form className="fade">
                    <textarea className="log standard" readOnly value={props.date}>{props.date}</textarea>
                    <textarea className="log area" readOnly value={props.taskDesc}>{props.taskDesc}</textarea>
                </form>
            </center>
        </div>
    );
}

export default Viewtask;