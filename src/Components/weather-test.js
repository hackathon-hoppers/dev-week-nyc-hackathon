import React, { Component } from 'react';
import axios from 'axios';
import Tornado from './Tornado';
import NoTornado from './NoTornado';
let { apiKey } = require('../secrets');

class Weather extends Component {
  constructor() {
    super();
    this.state = {
      weatherData: {},
    };
  }

  componentDidMount() {
    async function getWeather(lat, lon) {
      let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
      try {
        const response = await axios.get(url);
        const { data } = response;
        console.log('data1', data);
        return data.weather[0];
      } catch (error) {
        console.error(error);
      }
    }
    getWeather('35', '139').then(response => {
      console.log('data', response);
      this.setState({
        weatherData: response,
      });
    });
  }

  render() {
    const { id, main } = this.state.weatherData;
    return (
      <div>
        <h3>Current weather: </h3>
        <h1>{main}</h1>
        {id === 781 ? <Tornado /> : <NoTornado />}
      </div>
    );
  }
}

export default Weather;
