import React from 'react';

function useLocalStorage(itemName, initialValue){
  const [item, setItem] = React.useState(initialValue)
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  
  React.useEffect(() => {
    setTimeout(() => {
      try{
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
      
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = initialValue
        }else{
          parsedItem = JSON.parse(localStorageItem)
          setItem(parsedItem)
        }
  
        setLoading(false);
      }
      catch(error){
        setLoading(false);
        setError(error);
      }
    }, 2000);
  }, []);
  

  

  const saveItem = (newTodos) => {
    localStorage.setItem(itemName, JSON.stringify(newTodos))
    setItem(newTodos)
  }

  return { item,
           saveItem,
           loading,
           error
          };
}

// const defaultTodos = [
//   { text: 'Comprar pan', completed: true },
//   { text: 'Comprar leche', completed: false },
//   { text: 'Comprar carne', completed: false },
//   { text: 'Comprar huevos', completed: true}
// ]

// const stringifiedTodos = JSON.stringify(defaultTodos)
// localStorage.setItem('TODOS_V1', stringifiedTodos)

// localStorage.getItem('TODOS_V1')
// localStorage.setItem('TODOS_V1', defaultTodos)
// localStorage.removeItem('TODOS_V1')
//
// JSON.stringify(defaultTodos)
// JSON.parse(localStorage.getItem('TODOS_V1'))

export { useLocalStorage }