const express = require('express');
const _ = require('lodash');
const validate = require('express-validation');
const axios = require('axios');
const config = require('../config');
const paramValidation = require('../param-validation');
const APIError = require('../helpers/APIError');

const router = express.Router(); // eslint-disable-line new-cap

const ROOT_URL = 'https://api.flightstats.com/flex/schedules/rest/v1/json/flight';

router.route('/')
  /** GET /api/users - Get list of users */
  .get(validate(paramValidation.getFlightStat), (req, res) => {
    const { flight, date } = req.query;
    const { flightStats: { appId, appKey } } = config;

    const year = date.getFullYear();
    // 'getMonth' returns the month from 0-11, the API however needs from 1-12
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const carrier = flight.substr(0, 2).toUpperCase();
    // parseInt will suppress leading zeros
    const flightNumber = parseInt(flight.substr(2, flight.length).trim(), 10);

    const departingRequest = axios.get(`${ROOT_URL}/${carrier}/${flightNumber}/departing/${year}/${month}/${day}?appId=${appId}&appKey=${appKey}`);
    const arrivingRequest = axios.get(`${ROOT_URL}/${carrier}/${flightNumber}/arriving/${year}/${month}/${day}?appId=${appId}&appKey=${appKey}`);

    Promise.all([departingRequest, arrivingRequest])
      .then((values) => {
        const data = values.map(value => (value.data)); // Getting the data from axios responses
        const mappedData = _.mapKeys(data, el => (el.request.departing ? 'departing' : 'arriving')); // mapping responses to responsive keys
        return res.send(mappedData);
      })
      .catch(err => res.send(new APIError(err)));
  });

module.exports = router;
