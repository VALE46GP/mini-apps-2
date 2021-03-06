
import React from 'react';
import EventList from './EventList';
import Search from './Search';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      events: [
        {
          date: "-300",
          description: "Pilgrims, man. F*ckin pilgrims.",
          lang: "en",
          category1: "By place",
          category2: "Greece",
          granularity: "year",
        }
      ],
    };
  }

  componentDidMount() {
  }

  render() {
    const { events, query } = this.state;
    return (
      <div>
        <h3>And me, Im an APP.. but can an app feel love?</h3>
        <Search events={events} query={query} />
        <EventList events={events} query={query} />
      </div>
    );
  }
}

export default App;

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
