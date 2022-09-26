import React from 'react'
import {TodoItem} from "./TodoItem";

export const Todos = (props) => {
  let myStyle={
    border:"1px solid red",
  
  }
  return (
    <div className='container my-3' style={myStyle}>
      <h3 className='text-center my-3'>Todo-List</h3>
      
      {
      props.todo.length===0
      ?
      "No Todos Available"
      :
      props.todo.map((todo)=>{
        return <TodoItem todo={todo} key={todo.id} onDelet={props.onDelet}/>
      })}
      
      </div>
  )
}
