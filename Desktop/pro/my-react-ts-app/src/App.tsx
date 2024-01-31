import React from 'react';
import './App.css';
import Create from "./CRUD/create/create";
import Read from "./CRUD/read/read";

function App() {
  return (
    <div className="App">
      <Create/>
        <Read/>
    </div>
  );
}

export default App;
