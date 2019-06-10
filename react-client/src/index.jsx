import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Sidebar from './components/Sidebar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      services: {
        shelter: [],
        food: [],
        medical: [],
        dental: [],
        selfCare: [],
        community: []
      },
      selectedServices: '',
      selectedDate: '',
      selectedEvent: {}
    };

    this.handleServiceChange = this.handleServiceChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url: '/date',
      success: data => {
        this.setState({
          items: data
        });
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
    return (
      <div>
        <h1>Beacon</h1>
        <Sidebar
          onSubmit={this.handleSubmit}
          onChange={this.handleServiceChange}
          onSelect={this.handleDateChange}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
