const Joi = require('joi');

// require and configure dotenv, will load vars in .env in PROCESS.ENV
require('dotenv').config();

// define validation for all the env vars
const envVarsSchema = Joi.object({
  NODE_ENV: Joi.string()
    .allow(['development', 'production'])
    .default('development'),
  PORT: Joi.number()
    .default(3000),
  APP_ID: Joi.string().required()
    .description('Flightstats app ID needed to make API calls'),
  APP_KEY: Joi.string().required()
    .description('Flightstats app key needed to make API calls')
}).unknown()
  .required();

const { error, value: envVars } = Joi.validate(process.env, envVarsSchema);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  flightStats: {
    appId: envVars.APP_ID,
    appKey: envVars.APP_KEY
  }
};

module.exports = config;
