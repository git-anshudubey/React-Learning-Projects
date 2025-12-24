import { createContext, useContext } from "react";

export const TodoContext = createContext({
   todos: [
    {
        id:1,
        todo: "Todo msg",
        completed: false,
    }
   ],
   addTodo: (todo) => {},
   updateTodo:(id, todo) => {},
   deleteTodo: (id) => {},
   toggleComplete: (id) => {}
});


// Here, we are just creating a Hook to use Context of TOdoContext.
export const useTodo = () =>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider;