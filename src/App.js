import React from 'react';
import { UseState } from './UseState';
import { UseReducer } from './UseReducer';
import './App.css';

function App() {
  return (
    <div className="App">
      <UseState name="UseState"/>
      <hr />
      <UseReducer name="UseReducer"/>
    </div>
  );
}

export default App;
