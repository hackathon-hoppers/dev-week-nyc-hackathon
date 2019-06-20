import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tornado from './Tornado';
import NoTornado from './NoTornado';
import ZipForm from './ZipForm';
import { updateZip } from '../Reducers/weatherReducer';

class Weather extends Component {
  componentDidMount() {
    let zip;
    this.props.zip ? (zip = this.props.zip) : (zip = '11222');
    this.props.updateZip(zip);
  }

  render() {
    console.log(this.props.weather);

    if (this.props.weather)
      return (
        <div>
          <ZipForm />
          <h3>
            Current weather in {this.props.zip}
            <br />
            {this.props.weather.main}
            <br />
          </h3>
          {this.props.weather.id === 781 || this.props.isTornado ? (
            <Tornado />
          ) : (
            <NoTornado />
          )}
        </div>
      );
    if (!this.props.weather)
      return (
        <div>
          <h5>loading</h5>
        </div>
      );
  }
}

const mapState = state => {
  return {
    zip: state.weather.zip,
    weather: state.weather.weatherData,
    isTornado: state.weather.isTornado,
  };
};

const mapDispatch = dispatch => ({
  updateZip: zip => dispatch(updateZip(zip)),
});

export default connect(
  mapState,
  mapDispatch
)(Weather);
