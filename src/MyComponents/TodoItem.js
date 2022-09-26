import React from 'react'

export const TodoItem = ({todo,onDelet}) => {
  
  return (
    <div className='container'> 

      <h5>{todo.task}</h5>
      <span  >{todo.id+") "}</span> 
      <span >{todo.desc+" "}</span>
      <span className='text-center'>

      <button className="btn btn-sm btn-danger " onClick={()=>{onDelet(todo)}}>Delet</button>
      </span>
     
  
    </div>
  )
}
