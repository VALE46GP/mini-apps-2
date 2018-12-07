
import React from 'react';

class Scoreboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <h3>Scoreboard</h3>
        <div className="grid-container">
          <div className="t-name">name</div>
          <div className="name">Ericio</div>
          <div className="f1">8</div>
        </div>
      </div>
    );
  }
}

export default Scoreboard;
