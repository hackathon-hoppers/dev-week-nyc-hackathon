import React, {Component} from 'react'

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

      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'Tornado Condition On' : 'Tornado Condition Off'}
      </button>
    );
  }
}

// ReactDOM.render(
//   <ToggleTornado />,
//   document.getElementById('root')
// );

export default ToggleTornado
