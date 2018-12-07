
import React from 'react';
import Scoreboard from './Scoreboard';
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
        <h3>App</h3>
        <Scoreboard />
      </div>
    );
  }
}

export default App;
