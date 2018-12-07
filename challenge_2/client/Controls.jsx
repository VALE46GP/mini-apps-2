
import React from 'react';

class Controls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: '',
      end: '',
    };
    this.updateStart = this.updateStart.bind(this);
    this.updateEnd = this.updateEnd.bind(this);
    this.submitDates = this.submitDates.bind(this);
  }

  updateStart(event) {
    this.setState({
      start: event.target.value,
    });
  }

  updateEnd(event) {
    this.setState({
      end: event.target.value,
    });
  }

  submitDates() {
    const { handleSubmitDates } = this.props;
    console.log(this.state);
    handleSubmitDates(this.state);
  }

  render() {
    return (
      <div className="main-flex">
        <div>
          <p>Start:</p>
          <input onChange={this.updateStart} type="date" name="start" />
        </div>
        <div>
          <p>End:</p>
          <input onChange={this.updateEnd} type="date" name="end" />
        </div>
        <div>
          <p />
          <button onClick={this.submitDates} type="submit">Submit</button>
        </div>
      </div>
    );
  }
}

export default Controls;
