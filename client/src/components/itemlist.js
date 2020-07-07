import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Item from './item';

function Itemlist(props) {
    if (props.date) {
        return (
            <div>
                <center>
                    <button onClick={props.viewAll} className="btn-logout toggle">View all dates</button>
                </center>
                <div className="ItemList-box">
                    {props.items}
                </div>

            </div>
        );
    }
    else {
        return (
            <div className="ItemList-box">
                {props.items}
            </div>
        );
    }

}

export default Itemlist;