import React from 'react';

function Item(props) {
    return (
        <div className="item">
            {props.name}
        </div>
    );
}

export default Item;