
import React from 'react';

class Controls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: '',
      end: '',
    };
  }

  componentDidMount() {

  }

  updateStart(event) {
    this.setState({
      start: event.target.value,
    });
  }

  updateEnd() {

  }

  const { handleSubmit } = this.props;
  

  render() {
    return (
      <div className="main-flex">
        <div>
          <p>Start:</p>
          <input onChange={this.updateStart} type="date" name="start" />
        </div>
        <div>
          <p>End:</p>
          <input type="date" name="start" />
        </div>
        <div>
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
      </div>
    );
  }
}

export default Controls;
