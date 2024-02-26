import React, { useState } from 'react';
import './App.css';

function App() {
  const [item, setItem] = useState('');
  const [itemsList, setItemsList] = useState([]);

  const addItem = () => {
    if (item.trim() !== '') {
      setItemsList([...itemsList, item]);
      setItem('');
    }
  };

  const deleteItem = (index) => {
    const updatedList = [...itemsList];
    updatedList.splice(index, 1);
    setItemsList(updatedList);
  };

  const clearAll = () => {
    
    const shouldClear = window.confirm('Are you sure you want to clear all items?');

    if (shouldClear) {
      setItemsList([]);
    }
  };

  return (
    <div className="app">
      <h2>Shopping List</h2>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Add an item"
      />
      <button onClick={addItem}>Add</button>
      <ul>
        {itemsList.map((item, index) => (
          <li key={index}>
            {item}
            <span className="delete" onClick={() => deleteItem(index)}>
              X
            </span>
          </li>
        ))}
      </ul>
      {itemsList.length > 0 && (
        <button className="clearButton" onClick={clearAll}>
          Clear All
        </button>
      )}
    </div>
  );
}

export default App;

 