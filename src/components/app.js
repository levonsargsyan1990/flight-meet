import React, { Component } from 'react';

// Importing react components
import Header from './header';
import Details from './details';
import Flights from './flights';

export default class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Header />
        <Details />
        <Flights />
      </div>
    );
  }
}
