// config should be imported before importing any other file
const config = require('./server/config');
const app = require('./server/express');

// listen on port config.port
app.listen(config.port, () => {
  console.info(`Server started on port ${config.port} (${config.env})`); // eslint-disable-line no-console
});

module.exports = app;
