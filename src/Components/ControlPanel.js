import React, {Component} from 'react'



import ControlPanel, {
  Button,
  Checkbox,
  Multibox,
  Select,
  Text,
  Color,
  Range,
  Interval,
  Custom,
} from 'react-control-panel';

const initialState = {
  'range slider': 20,
  'stepped slider': 0.6,
  interval: [25, 50],
  text: 'my setting',
  checkbox: true,
  'color rgb': 'rgb(100, 200, 100',
  'color hex': '#30b2ba',
  selection: 'option 1',
  'multiple checkboxes': [true, true],
};

const DemoPanel = () => (

  <ControlPanel
    theme="dark"
    title="- - - - - - - - - - - - - - Camera Settings - - - - - - - - - - - - -"
    initialState={initialState}
    onChange={console.log}
    width={700}
    style={{ marginRight: 30 }}
  >
    <Range label="Exposure" min={0} max={30} />
    <Select label="ISO" options={{ '100': 100, '200': 200, '400': 400, '800':800, '1600':1600, '3200':3200 }} />
    <Checkbox label="Flash"/>
    <Button label="Capture photo" action={() => alert('Photo saved!')} width={700} style={{marginRight:0}}/>





  </ControlPanel>
);

export default DemoPanel;