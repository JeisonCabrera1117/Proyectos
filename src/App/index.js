import React from 'react';
import './App.css';
import { AppIU } from './AppUI';
import { TodoProvider } from '../TodoContext';

function App() {
  
  return (
    <TodoProvider>
      <AppIU />
    </TodoProvider>
  )
}

export default App;
