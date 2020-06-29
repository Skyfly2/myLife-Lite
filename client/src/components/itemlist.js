import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Item from './item';

function Itemlist(props) {
    const [items, updateItems] = useState([]);
    let newItems = [];
    useEffect(() => {
        axios.get('http://localhost:4000/gettasks', {
            params: {
                user: props.user
            }
        }).then(res => {
            for (let c = 0; c < res.data.names.length; c++) {
                newItems.push(<Item name={res.data.names[c]} date='now' desc={res.data.desc[c]} />)
            }
            updateItems(newItems);
            return;
        });
    });

    return (
        <div className="ItemList-box">
            {items}
            {items}
            {items}
        </div>
    );

}

export default Itemlist;