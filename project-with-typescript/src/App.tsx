import React,{useState} from 'react';
import './App.css';
import { InputField } from './Component/InputField';
const App:React.FC=()=> {
  const [todo,setTodo]=useState<string>("");
  return (
    <div className="App">
     <h1>TASKIFY</h1>
     <InputField todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
