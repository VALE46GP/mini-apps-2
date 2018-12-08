
import React from 'react';

class Controls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const range = [...Array(11).keys()];
    return (
      <div>
        <h3>[ controls ]</h3>
        {range.map(n => <img src={`https://s3-us-west-1.amazonaws.com/react-bowling/pin_${n}.png`} alt={`pin_${n}`} key={`pin_${n}`} height="80px" />)}
      </div>
    );
  }
}

export default Controls;
