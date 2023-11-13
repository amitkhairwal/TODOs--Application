import { createContext,useContext } from "react";

export const TodoContext=createContext({
    Todos:[
        {
            id:23,
            todo: "todo msg",
            Complete: false,
        }
    ],

    addTodo:(todo)=>{},
    updateTodo: (id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}

})



export const useTodo=()=>{
    return useContext(TodoContext)
}

export  const TodoProvider= TodoContext.Provider

