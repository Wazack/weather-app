import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import Fetch from './Fetch';


class App extends React.Component {
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  }

  render() {
    return (
      <div className="App">
        <input className='location' type={'text'} placeholder="Enter your location" />
        <div className='bg-square'>
          <Fetch />
        </div>
      </div>
    );
  }
}

export default App;
