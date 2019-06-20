import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateZip } from '../Reducers';

class ZipForm extends Component {
  constructor() {
    super();
    this.state = {
      zip: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.updateZip(this.state.zip);
    this.setState({
      zip: '',
    });
  }

  handleChange(event) {
    this.setState({
      zip: event.target.value,
    });
  }

  render() {
    return (
      <div id="zip-form">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="zip">zip code:</label>
          <input
            value={this.state.zip}
            type="text"
            name="zip"
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

const mapState = state => {
  return {
    zip: state.weather.zip,
  };
};

const mapDispatch = dispatch => {
  return {
    updateZip: zip => dispatch(updateZip(zip)),
  };
};

export default connect(
  mapState,
  mapDispatch
)(ZipForm);
