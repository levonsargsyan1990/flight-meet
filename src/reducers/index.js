import { combineReducers } from 'redux';
import flightReducer from './flights';
import selectedFlightReducer from './selectedFlights';
import loadingReducer from './loading';

const rootReducer = combineReducers({
  flights: flightReducer,
  selectedFlight: selectedFlightReducer,
  loading: loadingReducer
});

export default rootReducer;
