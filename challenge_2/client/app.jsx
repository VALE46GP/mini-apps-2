
import React from 'react';
import Chart from './Chart';
import Controls from './Controls';
import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <Controls />
        <Chart />
      </div>
    );
  }
}

export default App;
