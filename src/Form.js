import React, { useState } from 'react';

const Form = (props) => {
    const [itemName, setItemName] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        props.handleSubmit(itemName);
        e.target.reset();
    }

    return (
        <div className="ui big form">
            <form className="ui form" onSubmit={handleSubmit}>
                <div className="field">
                    <label>Item Name</label>
                    <input 
                        type="text" 
                        name="item" 
                        placeholder="item"
                        onChange={e => setItemName(e.target.value)}
                    />
                </div>
                <button className="ui button" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form;
