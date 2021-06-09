import React, { useState } from 'react';
import Form from './Form';
import List from './List';

const App = () => {
    const [list, setList] = useState([])

    const handleSubmit = (itemName) => {
       setList(list.concat(itemName))
    }

    return (
        <div>
            <h1>Packing List</h1>
            <Form handleSubmit={handleSubmit}/>
            <List list={list} />
        </div>
    )
}

export default App;