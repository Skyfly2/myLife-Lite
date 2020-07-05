import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Item from './item';

function Itemlist(props) {
    const [items, updateItems] = useState([]);
    let newItems = [];

    useEffect(() => {
        axios.get('http://localhost:4000/gettasks', {
            params: {
                user: props.user,
                date: props.date
            }
        }).then(res => {
            for (let c = 0; c < res.data.names.length; c++) {
                newItems.push(<Item name={res.data.names[c]} date='now' desc={res.data.desc[c]} id={res.data.ids[c]} comp={complete} />)
            }
            updateItems(newItems);
            return;
        });
    });

    const complete = id => {
        axios.delete('http://localhost:4000/complete', {
            params: {
                id: id
            }
        }).catch(err => console.log(err));
    }
    if (props.date) {
        return (
            <div>
                <center>
                    <button onClick={props.viewAll} className="btn-logout toggle">View all dates</button>
                </center>
                <div className="ItemList-box">
                    {items}
                </div>

            </div>
        );
    }
    else {
        return (
            <div className="ItemList-box">
                {items}
            </div>
        );
    }

}

export default Itemlist;