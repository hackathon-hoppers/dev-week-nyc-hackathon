import React from 'react';
import './App.css';
import TornadoToggle from './Components/TornadoToggle';
// import Weather from './Components/weather-test';
import Weather from './Components/Weather';
import DemoPanel from './Components/ControlPanel';
import CameraData from './Components/CameraData';

function App() {
  return (
    <div className="App">
      <TornadoToggle />
      <CameraData />
      <DemoPanel />

      <Weather />
    </div>
  );
}

export default App;
