import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
const myStyle ={
    marginTop : '-30px'
}
    return (
        <>
        <div>
           <h4>{todo.title}</h4>
           <p>{todo.desc}</p>
           </div>
           <div className="d-grid gap-2 d-md-flex justify-content-md-end">
           <button className="btn btn-sm btn-danger" style={myStyle} onClick={()=>{onDelete(todo)}}>Delete</button> 
        </div>
        <hr/> 
        </>
    )
}
