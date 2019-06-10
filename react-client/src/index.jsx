import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Map from './components/Map.jsx';
import Sidebar from './components/Sidebar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      services: {
        shelter: [
          {
            org: 'St Anthony',
            title: 'Hackaton',
            user: '',
            date: new Date(),
            loc: [37.7822, -122.41321]
          }
        ],
        food: [],
        medical: [],
        dental: [],
        selfCare: [],
        community: []
      },
      selectedService: 'shelter',
      selectedDate: '',
      selectedEvent: {
        org: 'St Anthony',
        title: 'Hackaton',
        user: '',
        date: new Date(),
        loc: [37.7822, -122.41321]
      },
      zoom: 14
    };
    this.handleServiceChange = this.handleServiceChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url: '/date',
      success: data => {
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
      error: err => {
        console.log('err', err);
      }
    });
  }
  handleServiceChange(event) {
    event.preventDefault();
    console.log(event.target.value);
    this.setState({ selectedServices: event.target.value });
  }

  handleDateChange(event) {
    this.setState({ selectedDate: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    const { selectedEvent, services, selectedService, zoom } = this.state;

    return (
      <div>
        <div className='page-header'>
          <h1>Beacon</h1>
        </div>
        <div className="container">
          <Map
            events={services[selectedService]}
            event={selectedEvent}
            zoom={zoom}
          />

          <Sidebar
            onSubmit={this.handleSubmit}
            onChange={this.handleServiceChange}
            onSelect={this.handleDateChange}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
