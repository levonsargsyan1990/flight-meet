import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { selectFlight } from '../actions';

const FlightRow = ({ type, flight, selectFlight, selectedFlight }) => {
  return (
    <tr onClick={() => selectFlight(`${type}-${flight.referenceCode}`)} className={selectedFlight === `${type}-${flight.referenceCode}` ? 'selected' : ''}>
      <td>
        {flight.airline} ({flight.carrierFsCode})
        <span>
          {flight.isCodeshare ? `(${flight.operator.airline})` : ''}
        </span>
      </td>
      <td>{flight.carrierFsCode}{flight.flightNumber}</td>
      <td>{flight.departureAirport} ({flight.departureAirportFsCode})</td>
      <td>{flight.arrivalAirport} ({flight.arrivalAirportFsCode})</td>
      <td>{moment(flight.departureTime).format('DD MMM YYYY')}</td>
      <td>{moment(flight.departureTime).format('HH:mm')}</td>
      <td>{moment(flight.arrivalTime).format('DD MMM YYYY')}</td>
      <td>{moment(flight.arrivalTime).format('HH:mm')}</td>
    </tr>
  );
};

function mapStateToProps({ selectedFlight }) {
  return { selectedFlight };
}

export default connect(mapStateToProps, { selectFlight })(FlightRow);
