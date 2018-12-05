
import React from 'react';

class EventList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      input: '',
      events: [],
    };
  }

  componentDidMount() {
  }

  render() {
    const { events, query } = this.state;
    return (
      <h3>Despite being an EVENTLIST, my life is pretty uneventful.</h3>
    );
  }
}

export default EventList;

/*
{
  date: "-300",
  description: "Pilgrims travel to the healing temples of Asclepieion to be cured of their ills. After a ritual purification the followers bring offerings or sacrifices.",
  lang: "en",
  category1: "By place",
  category2: "Greece",
  granularity: "year"
}
{"date": "-300","description": "test","lang": "en","category1": "test","category2": "test","granularity": "test"}
*/
