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
      selectedCat: 'shelter',
      selectedEvent: {}
    };
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

  render() {
    return (
      <div>
        <h1>Beacon</h1>
        <Sidebar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
