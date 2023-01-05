import React from 'react'
import { Todo } from '../model/model'

interface Props{
    alltodos:Todo[]
}

const TodoLists : React.FC<Props>=({alltodos})=> {
  return (
    <div className='TodoLists'>
        <h1>TodoLists</h1>
        {
            alltodos?.map((todo:Todo,index:number)=>{
                return (<div key={index}>
                    <h1 >{todo.id}</h1>
                    <h1>{todo.todo}</h1>
                    <h1>{todo.isDone}</h1>
                    </div>
                )
            })
        }
    </div>
  )
}

export default TodoLists