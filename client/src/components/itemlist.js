import React, { useState } from 'react';
import axios from 'axios';
import Item from './item';

function Itemlist(props) {
    let items = [<Item name='hello' />]

    return (
        <div>
            <div className="ItemList-box">
                {items}
                {items}
                {items}
                {items}
            </div>
            <div>
                Hpoa
        </div>
        </div>
    );
}

export default Itemlist;