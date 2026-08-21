import { useEffect, useState } from "react";
import { TodoProvider } from "./context/TodoContext";
import TodoItem from "./components/TodoItem";
import TodoForm from "./components/TodoForm";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, {id: Date.now(), ...todo}])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    // completed: !prevTodo.completed wala chiz completed ko overwrite karge
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
  }

  // Local Storage wala part

  // i.e laod everytime when app loads
  useEffect(() => {
    // you can access local storage directly in react, until u are on browser and not on server side rendering
    const todos = JSON.parse(localStorage.getItem("todos")) //cuz local storage stores values in string so need to cnv everytime

    if(todos && todos.length > 0){
      setTodos(todos)
    }
  }, [])

  // add aur update karne par local storage mai update ho jaye
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  
  

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => {
              // passed key here for performance, also passing index as a key is not a good practice
              return <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            })}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
