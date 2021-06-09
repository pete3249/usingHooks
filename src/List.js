import React from 'react';
import Item from './Item';

const List = ({ list }) => {
    if(list.length > 0) {
        return list.map((item, index) => <Item key={index} item={item} /> )
    } else {
        return <ul>Add to your list </ul>
    }
}

export default List;