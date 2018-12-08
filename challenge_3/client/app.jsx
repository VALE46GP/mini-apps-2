
import React from 'react';
import Scoreboard from './Scoreboard';
import Controls from './Controls';
import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <Controls />
        <Scoreboard />
      </div>
    );
  }
}

export default App;
