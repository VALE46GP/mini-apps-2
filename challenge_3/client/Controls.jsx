
import React from 'react';

class Controls extends React.Component {
  constructor(props) {
    super(props);
    this.hitPins = this.hitPins.bind(this);
  }

  hitPins(amount) {
    const { knockPins } = this.props;
    knockPins(amount);
  }

  render() {
    const { pins } = this.state;
    const { pins, knockPins } = this.props;
    const range = [...Array(pins + 1).keys()];
    return (
      <div>
        {range.map(n => (
          <img
            onClick={() => knockPins(n)}
            src={`https://s3-us-west-1.amazonaws.com/react-bowling/pin_${n}.png`}
            alt={`pin_${n}`}
            key={`pin_${n}`}
            height="80px"
          />
        ))}
      </div>
    );
  }
}

export default Controls;
