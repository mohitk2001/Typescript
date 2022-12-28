import React from "react";


interface Props{
    todo:String;
    setTodo:React.Dispatch<React.SetStateAction<string>>
}
export const InputField :React.FC<Props>= ({todo,setTodo}) => {

    const handleForm=():void=>{

    }
  return <div className="input_field">
    <form onSubmit={handleForm}>
    <input placeholder="Enter your task"/>

    </form>
  </div>;
};
