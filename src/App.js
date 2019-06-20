import React from 'react';
import './App.css';
import TornadoToggle from './Components/TornadoToggle';
// import Weather from './Components/weather-test';
import Weather from './Components/Weather';
import DemoPanel from './Components/ControlPanel';

function App() {
  return (
    <div className="App">
      <TornadoToggle />
      <DemoPanel />
      <Weather />
    </div>
  );
}

export default App;
