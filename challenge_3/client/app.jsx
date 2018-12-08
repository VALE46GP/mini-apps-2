
import React from 'react';
import Scoreboard from './Scoreboard';
import Controls from './Controls';
import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currFrame: 1,
      currRoll: 1,
      pinsStanding: 10,
    };
    this.knockPins = this.knockPins.bind(this);
  }

  componentDidMount() {

  }

  knockPins(amount) {
    const { pinsStanding } = this.state;
    this.setState({
      pinsStanding: pinsStanding - amount,
    });
  }

  render() {
    const { pinsStanding } = this.state;
    return (
      <div>
        <Controls pins={pinsStanding} knockPins={this.knockPins} />
        <Scoreboard />
      </div>
    );
  }
}

export default App;
