import React, { useRef } from "react";
import { Todo } from "../model/model";
import TodoLists from "./TodoLists";
interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  Todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
export const InputField: React.FC<Props> = ({
  todo,
  setTodo,
  Todos,
  setTodos,
}) => {
  const inputTodo = useRef<null | HTMLInputElement>(null);
  const handleForm = (e: React.FormEvent): void => {
    e.preventDefault();
    
    setTodo(inputTodo.current?.value as string);
    console.log(todo);

    setTodos([
      ...Todos,
      {
        id: Date.now().toString(),
        todo: todo,
        isDone: false,
      },
    ]);
  };
  return (
    <div className="input_field">
      <form onSubmit={handleForm}>
        <input placeholder="Enter your task" ref={inputTodo} />
        <button type="submit">Go</button>
      </form>
      <TodoLists alltodos={Todos}/>
    </div>
  );
};
