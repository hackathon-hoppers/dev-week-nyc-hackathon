import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Tornado from './Tornado';
import NoTornado from './NoTornado';
import ZipForm from './ZipForm';
let { apiKey } = require('../secrets');

class Weather extends Component {
  constructor() {
    super();
    this.state = {
      weatherData: {},
    };
  }

  componentDidMount() {
    async function getWeather(zip) {
      let url = `http://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}`;
      try {
        const response = await axios.get(url);
        const { data } = response;
        console.log('data1', data);
        return data.weather[0];
      } catch (error) {
        console.error(error);
      }
    }
    getWeather(this.props.zip).then(response => {
      console.log('data', this.state);
      this.setState({
        weatherData: response,
      });
      console.log('data', response);
    });
  }

  render() {
    console.log('props', this.props);
    const zip = this.props.zip;
    const { id, main } = this.state.weatherData;
    return (
      <div>
        <ZipForm />

        <h3>Current weather in {zip}</h3>
        <h1>{main}</h1>
        {id === 781 ? <Tornado /> : <NoTornado />}
      </div>
    );
  }
}

const mapState = state => {
  return {
    zip: state.zip,
  };
};

export default connect(
  mapState,
  null
)(Weather);
