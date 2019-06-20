import React from 'react';
import './App.css';
import TornadoToggle from './Components/TornadoToggle';
// import Weather from './Components/weather-test';
import Weather from './Components/Weather';
import DemoPanel from './Components/ControlPanel';
import CameraData from './Components/CameraData';
import ZipForm from './Components/ZipForm';
import ControlPanel, { Text } from 'react-control-panel';

function App() {
  return (
    <div className="App">
    <div className="title">Storm Catchr</div>
    <ControlPanel title={"Hi, nature photographer! Use the panel below to remotely control your camera during perilous weather and seek safety while still getting the best shot!"} width={700} height={200} theme="dark" />
    
    
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
