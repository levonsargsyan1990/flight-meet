import axios from 'axios';
import {
  FETCH_FLIGHT,
  START_LOADING,
  STOP_LOADING,
  SELECT_FLIGHT,
  UNSELECT_FLIGHT
} from './types';

/* eslint-disable import/prefer-default-export */
export function fetchFlight({ flight, date }, ck) {
  const request = axios.get(`/api/flights?flight=${flight}&date=${date.getTime()}`)
    .then((res) => {
      ck();
      return res.data;
    });
  return {
    type: FETCH_FLIGHT,
    payload: request
  };
}

export function startLoading() {
  return {
    type: START_LOADING
  };
}

export function stopLoading() {
  return {
    type: STOP_LOADING
  };
}

export function selectFlight(referenceCode) {
  return {
    type: SELECT_FLIGHT,
    payload: referenceCode
  };
}

export function unselectFlight() {
  return {
    type: UNSELECT_FLIGHT
  };
}
/* eslint-enable import/prefer-default-export */
