import React from 'react';
import FlightRow from './flightRow';

const flightTable = ({ type, flights }) => {
  const list = flights.scheduledFlights.map(flight => (<FlightRow type={type} key={flight.referenceCode} flight={flight}/>));

  if (list.length === 0) {
    return (<div>No {type} flights</div>);
  }

  return (
    <table className="ui selectable blue celled table">
      <thead>
        <tr>
          <td>Airline (FS)</td>
          <td>Flight</td>
          <td>From</td>
          <td>To</td>
          <td>Departure Date</td>
          <td>Departure Time</td>
          <td>Arrival Date</td>
          <td>Arrival Time</td>
        </tr>
      </thead>
      <tbody>
        {list.length? list : `No ${type} flights`}
      </tbody>
    </table>
  );
};

export default flightTable;
