import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Map from './components/Map.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      services: {
        shelter: [{
          org: 'St Anthony',
          title: 'Hackaton',
          user: '',
          date: new Date(),
          loc: [37.782200, -122.413210]
        }],
        food: [],
        medical: [],
        dental: [],
        selfCare: [],
        community: []
      },
      selectedService: 'shelter',
      selectedEvent: {
        org: 'St Anthony',
        title: 'Hackaton',
        user: '',
        date: new Date(),
        loc: [37.782200, -122.413210]
      },
      zoom: 14
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/date', 
      success: (data) => {
        // const services = {};
        // data.forEach(event => {
        //   event.categories.forEach(cat => {
        //     services[cat] = event;
        //   })
        // });

        // this.setState({
        //   services: services
        // })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    const { selectedEvent, services, selectedService, zoom } = this.state;

    return (
      <div>
        <div className="page-header">
          <h1>Beacon</h1>

        </div>
        <div>
          <Map 
            events={services[selectedService]} 
            event={selectedEvent}
            zoom={zoom}
          />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));