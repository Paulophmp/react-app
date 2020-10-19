import React from 'react';
import logo from './logo.svg';
import Car from './Car'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Criando a primeira SPA React App1
        </p>
        <Car colorido='blue'/>
      </header>
    </div>
  );
}

export default App;
