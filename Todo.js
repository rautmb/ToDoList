import React, { useState } from 'react';
import { } from '../ToDoListProject/Style/todostyle.css'

export const Todolist = () => {
    const [Items, setItems] = useState('');
    const [listdata, setlistdata] = useState([]);

    const changeevent = (e) => {
        setItems(e.target.value);
    }

    const additems = () => {
        setlistdata([...listdata, Items]);
        console.log(listdata);
        setItems('');
    }

    const deleteitem = (i) => {
        const update = listdata.filter((v, id) => {
            return i != id;
        });
        setlistdata(update);
    }

    const removeall = () => {
        setlistdata([]);
    }

    return (
        <>
            <div className='main_div'>
                <div className='center_div'>
                    <div className='header'>
                        <h2>ToDoList</h2>
                    </div>
                    <input type="text" placeholder='Add Item' value={Items} onChange={changeevent} />
                    <button onClick={() => additems()}>Add Item</button>
                    {
                        listdata.map((v, i) => {
                            return (
                                <>
                                    <p key={i}>
                                        <div className='allitems'>{v}
                                            <button className='btn' onClick={() => deleteitem(i)}>Delete</button>
                                        </div>
                                    </p>
                                </>
                            )
                        })
                    }
                    {
                        listdata.length >= 1 && <button className='btn' onClick={() => removeall()}>Remove all</button>
                    }
                </div>
            </div>
        </>
    )
}