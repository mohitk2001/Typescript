import React,{useState} from 'react';
import './App.css';
import { InputField } from './Component/InputField';
import { Todo } from "./model/model";


const App:React.FC=()=> {
  const [todo,setTodo]=useState<string>("");
  const [todos,setTodos]=useState<Todo[]>([]);
  return (
    <div className="App">
     <h1>TASKIFY</h1>
     <InputField todo={todo} setTodo={setTodo} Todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
