import React from 'react';
import './App.css';
import TornadoToggle from './Components/TornadoToggle';
import Weather from './Components/weather-test';
import DemoPanel from './Components/ControlPanel';

function App() {
  return (

    <div className="App">
      <header className="App-header">
      <TornadoToggle/>
        <Weather />
        <DemoPanel/>
      </header>
    </div>

  );
}

export default App;
