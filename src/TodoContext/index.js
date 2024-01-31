import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext()

function TodoProvider({children}){
  const { 
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setsearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  console.log('log 1');

  // React.useEffect(() =>{
  //   console.log('looooog 2');
  // });

  // React.useEffect(() =>{
  //   console.log('looooog 2');
  // },[]); con una array vacio.. solo se ejecutará una vez

  React.useEffect(() =>{
    console.log('looooog 2');
  },[totalTodos]);

  console.log('log 3');

  const searchTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText)
    }
  )

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
      );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
      );
    if (newTodos[todoIndex].completed === true) {
      newTodos.splice(todoIndex, 1)
    }else{
      window.alert("No se puede eliminar un TODO sin completar")
    }
    saveTodos(newTodos)
  }

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text: text,
      completed: false
    })
    saveTodos(newTodos)
  }
  return(
    <TodoContext.Provider value={{
      loading,
      error,
      completedTodos,
      totalTodos,
      searchTodos,
      searchValue,
      setsearchValue,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
      addTodo
      }}>
      {children}
    </TodoContext.Provider>
  );
}


export { TodoContext, TodoProvider }