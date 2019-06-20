import React, {Component} from 'react'
import ControlPanel, {Checkbox} from 'react-control-panel';

class ToggleTornado extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
  }

	handleClick() {
		this.setState(function(prevState) {
			return {isToggleOn: !prevState.isToggleOn};
		});
	}


  render() {
    return (
        <ControlPanel 
            theme="dark"
            title="- - - -  Toggle Tornado Conditions (for demonstrative purposes) - - - - "
             width={500}
            style={{ marginRight: 30 }}>

            <Checkbox label="Toggle Tornado Conditions"/>

      {/*<button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'Tornado Condition On' : 'Tornado Condition Off'}
      </button>*/}

      </ControlPanel>
    );
  }
}

// ReactDOM.render(
//   <ToggleTornado />,
//   document.getElementById('root')
// );

export default ToggleTornado
