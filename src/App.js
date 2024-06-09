import React from 'react'
import {ProductConsumer, ProductProvider} from './context';
import Home from './Components/Home';
import {updateValue, onSave, onEdit, onDelete} from './context'

function App() {
  return (
    <div className="App">
      <Home/>

    </div>
  );
}

export default App;
