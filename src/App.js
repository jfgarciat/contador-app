import { useState } from "react";
import Header from "./components/Layout/Header";
import List from "./components/List/List";
import TodoInput from "./components/TodoInput/TodoInput";

function App() {
  const [todos, setTodos] = useState([])

  const addTodoHandler = (aja) => {
    setTodos((prevTodos)=>{
      const updateTodos = [...prevTodos];
      updateTodos.unshift({text: [`${aja}`], id: Math.random().toString()});
      console.log(updateTodos);
      return updateTodos;
    })
  }

  return (
    <div >
      <Header />
      <main>
        <TodoInput onAddTodo = {addTodoHandler}/>
        <List items={todos} />
      </main>
    </div>
  );
}

export default App;
