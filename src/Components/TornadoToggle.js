import React, { Component } from 'react';
import ControlPanel, { Checkbox } from 'react-control-panel';
import { connect } from 'react-redux';
import { tornadoToggle } from '../Reducers';

class ToggleTornado extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.tornadoToggle();
  }

  render() {
    return (
      <ControlPanel
        theme="dark"
        title="- - - -  Toggle Tornado Conditions (for demonstrative purposes) - - - - "
        width={500}
        style={{ marginRight: 30 }}
      >
        {/* <Checkbox
          label="Toggle Tornado Conditions"

        /> */}

        <button onClick={this.handleClick}>
          {this.props.isTornado
            ? 'Tornado Condition Off'
            : 'Tornado Condition On'}
        </button>
      </ControlPanel>
    );
  }
}

const mapState = state => {
  return {
    isTornado: state.weather.isTornado,
  };
};

const mapDispatch = dispatch => ({
  tornadoToggle: () => dispatch(tornadoToggle()),
});

export default connect(
  mapState,
  mapDispatch
)(ToggleTornado);
