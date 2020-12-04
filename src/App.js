import React from 'react';
import pave from './arrozdeleite.jpg';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <br/>
        <img src={pave} className="App-logo" alt="logo" />
        <p>
          <a
            className="App-link"
            href="arrozdeleite@arrozdeleite.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            arrozdeleite@arrozdeleite.com.br
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;