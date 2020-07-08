import React from 'react';

function Item(props) {
    return (
        <div className="item">
            <div className="item-title" onClick={() => props.view()}>
                <div className="item-title">
                    {props.name}
                </div>
            </div>
            <div className="item-content">
                <div className="item-button">
                    <button className="btn-logout" onClick={() => props.edit()}>Edit</button>
                </div>

                <div className="item-button">
                    <button className="btn-logout" onClick={() => { props.comp(props.id) }}>Complete</button>
                </div>
            </div>
        </div>
    );
}

export default Item;