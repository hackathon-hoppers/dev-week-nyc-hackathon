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

const CameraData = () => (

  <ControlPanel
    theme="dark"
    title="- - - - - - - - - - - - - - - - Camera Data - - - - - - - - - - - - - -"
    initialState={initialState}
    onChange={console.log}
    width={500}
    style={{ marginRight: 30 }}
    settings={[
        { type: 'text', label: 'Battery Life', initial: 'BATTERYLIFEGOESHERE' },
        { type: 'text', label: 'Storage', initial: 'STORAGEGOESHERE' },
]}
  >



  </ControlPanel>
);

export default CameraData;