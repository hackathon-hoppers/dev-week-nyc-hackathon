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
      zip: '95376',
    };
  }

  componentDidMount() {
    

    async function getWeather(zip) {
      let url = `http://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}`;
      try {
        const response = await axios.get(url);
        const { data } = response;
        return data.weather[0];
      } catch (error) {
        console.error(error);
      }
    }
    getWeather(this.props.zip || this.state.zip).then(response => {
      this.setState({
        weatherData: response,
      });
    });
  }

  render() {
    let zip;
    this.props.zip ? ({ zip } = this.props) : ({ zip } = this.state);

    const { id, description } = this.props.weather;
    return (
      <div>
        <ZipForm />

        <h3>
          Current weather in {zip}: {description}
        </h3>
        {id === 781 ? <Tornado /> : <NoTornado />}
      </div>
    );
  }
}

const mapState = state => {
  return {
    zip: state.weather.zip,
    weather: state.weather.weatherData,
  };
};

export default connect(
  mapState,
  null
)(Weather);
