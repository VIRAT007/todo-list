import './App.css';
import Header from './MyComponents/Header';
import {Footer} from "./MyComponents/Footer";
import {Todos} from "./MyComponents/Todos";
import './MyComponents/AddTodo';
import React, {useState,useEffect} from 'react';

import AddTodo from './MyComponents/AddTodo';
function App() {
  let initTodo;
  if(localStorage.getItem("demo")===null)
      initTodo=[];
  else
    initTodo=JSON.parse(localStorage.getItem("demo"))
  


  const onDelet=(todo)=>{
    console.log("I am deleted of",todo);
    setTodos(demo.filter((e)=>{
      return e!==todo;}));
    
    localStorage.getItem("demo")   
  }

  const addTodo=(title,desc)=>{
    let id;
    if(demo.length===0)
    {id=1;}
    else{
     id=demo[demo.length-1].id+1;
    }
    const newTodo={
      id:id,
      task:title,
      desc:desc,
    }
    setTodos([...demo,newTodo])
    console.log(id,title,desc)
  
  }
  
  const[demo, setTodos]=useState(initTodo);
  
  useEffect(() => {
    localStorage.setItem("demo",JSON.stringify(demo));
  },[demo])
  
  return (
    <>
  <Header title="Veer's Todo-List" searchBar="false" />
  <AddTodo addTodo={addTodo}/>
  <Todos todo={demo} onDelet={onDelet}/>
  <Footer/>

    </>
  );
}

export default App;