import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import World from './components/World';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Hello />
      <World />
      </header>
    </div>
  );
}

export default App;
