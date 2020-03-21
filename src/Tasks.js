import React from 'react'
import './Tasks.css'
export default (props) => {
    const { task,EditTask,DeleteTask} = props
    const {id,name} = task
    return (
        <li>
            <div className="id">{id}</div>
            <div className="name">{name}</div>
            <div className='container'>
                <button className="green" onClick={()=>DeleteTask(id)}>Delete</button> 
                <button className="red" onClick={()=>EditTask(id)}>Edit</button>
            </div>
        </li>
    )
}