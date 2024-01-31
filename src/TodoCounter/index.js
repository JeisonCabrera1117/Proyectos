import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext)
  let title = ''
  if(totalTodos === 0 && completedTodos === 0) {
    title = 'No hay TODOs'
  } else if (totalTodos === completedTodos){
    title = '¡Felicitaciones! Has completado todos los TODOs!'
  } else{
    title = "Has completado " + completedTodos + " de " + totalTodos + " TODOs"
  }
  

  return (
    <h1 className="TodoCounter">
      {title}  
    </h1>
  );
}

export { TodoCounter };
