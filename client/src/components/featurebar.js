import React from 'react';

function Featurebar(props) {
    return (
        <div className="feature-bar">
            <button className="btn-logout" onClick={props.logout}>{'<Logout'}</button>
            <div className="add">
                <button className="btn-logout" onClick={props.create}>+</button>
            </div>
        </div>
    );
}

export default Featurebar;