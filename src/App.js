import React from 'react';
import './App.css';
import TornadoToggle from './Components/TornadoToggle';
import Weather from './Components/weather-test';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <TornadoToggle/>
        <Weather />
      </header>
    </div>
  );
}

export default App;
