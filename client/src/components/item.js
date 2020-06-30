import React from 'react';

function Item(props) {
    return (
        <div className="item">
            <div className="item-half">
                <div className="item-title">
                    {props.name}
                </div>
                <div className="item-button">
                    <button className="btn-logout">Edit</button>
                </div>
            </div>
            <div className="item-half">
                <div className="item-title">

                </div>
                <div className="item-button">
                    <button className="btn-logout" onClick={() => { props.comp(props.id) }}>Complete</button>
                </div>
            </div>
        </div>
    );
}

export default Item;