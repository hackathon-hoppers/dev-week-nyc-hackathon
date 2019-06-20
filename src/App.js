import React from 'react';
import './App.css';
import TornadoToggle from './Components/TornadoToggle';
// import Weather from './Components/weather-test';
import Weather from './Components/Weather';
import DemoPanel from './Components/ControlPanel';
import CameraData from './Components/CameraData';
import ZipForm from './Components/ZipForm';

function App() {
  return (
    <div className="App">
    <div><h1>- - - Storm Catchr - - -</h1></div>
    <div width={500}><small>Hi, nature photographer! <br/>Use the panel below to remotely control your camera during perilous weather and seek safety while still getting the best shot!</small></div><br/>
          <Weather />
          <ZipForm/>
      <TornadoToggle />
      <CameraData />
      <DemoPanel />
      <br/><br/>
    </div>
  );
}

export default App;
