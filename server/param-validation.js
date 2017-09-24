const Joi = require('joi');

module.exports = {
  // GET /api/flight
  getFlightStat: {
    query: {
      date: Joi.date().timestamp().required(),
      flight: Joi.string().regex(/\b[a-zA-Z]{2}[0-9]{1,4}\b/).required()
    }
  }
};
