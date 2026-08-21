import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            // each item in loop in app.jsx will be a todo and todo.todo is mssg in here object
            id: 1,
            todo: "Todo mssg",
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider