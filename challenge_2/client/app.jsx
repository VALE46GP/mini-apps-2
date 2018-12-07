
import React from 'react';
import axios from 'axios';
import Chart from './Chart';
import Controls from './Controls';
import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      intervals: [],
      values: [],
    };
    this.handleSubmitDates = this.handleSubmitDates.bind(this);
  }

  componentDidMount() {
    this.handleSubmitDates({
      start: 0,
      end: 0,
    });
  }

  handleSubmitDates(state) {
    const { start, end } = state;
    axios.get(`/api/${start}/${end}`)
      .then((response) => {
        const data = response.data.bpi;
        const intervals = Object.keys(data);
        const values = Object.values(data);

        this.setState({
          intervals,
          values,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { intervals, values } = this.state;
    return (
      <div>
        <Controls handleSubmitDates={this.handleSubmitDates} />
        <Chart intervals={intervals} values={values} />
      </div>
    );
  }
}

export default App;
