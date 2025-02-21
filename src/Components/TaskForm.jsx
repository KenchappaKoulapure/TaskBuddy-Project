import { useState } from "react";
import React from 'react';


export default function TaskForm() {
    let [task, setTask] = useState('');

    let [priority, setPriority] = useState('Medium');
    let [categoty, setCategory] = useState('General');


    return (
        <div>
            <input type="text" name="" id="" onChange={(e) => setTask(e.target.value)} />
            <h1>{task}</h1>
            <h1>{priority}</h1>
            <h1>{categoty}</h1>
            <button onClick={'handlesubmit'}>Submit</button>
            <div>
            <select name="" id="" onChange={(e) => setPriority(e.target.value)}>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
                <option value="Low">Low</option>
            </select>
            
            <select name="" id="" onChange={(e) => setCategory(e.target.value)}>
                <option value="General">General</option>
                <option value="Low">Low</option>
                <option value="Personal">Personal</option>
            </select>
            </div>
        </div>
    )
}