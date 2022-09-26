import React, {useState} from "react";

export default function AddTodo(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit=(e)=>{
        if(!title || !desc){
          alert("Title or Description cannot be blank")
        }
        else
        props.addTodo(title,desc);
  }
  
  
  return (
    <div className="container">
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label mx-2">
            Write Your Todo Title here
          </label>
          <input type="text" className="form-control " onChange={(e)=>{setTitle(e.target.value)}} id="title"/>
        </div>
        
        <div className="mb-3">
          <label htmlFor="desc" className="form-label mx-2">
            Write Your Todo Description here
          </label>
          <input type="text" className="form-control" onChange={(e)=>{setDesc(e.target.value)}} id="desc"/>
        </div>
        
        <button type="submit" className="btn btn-sm btn-primary mx-2">
          Add Todo
        </button>
      </form>
    </div>
  );
}
