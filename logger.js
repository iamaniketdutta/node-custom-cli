const { createLogger, format, transports, config } = require('winston')
const { combine, timestamp, printf } = format;

const myFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level}]: ${message}`;
});

const options = {
  file: {
    filename: `${__dirname}/logs/app.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5
  }
};

const logger = createLogger({
  levels: config.npm.levels,
  format: combine(
    timestamp(),
    myFormat
  ),
  transports: [
    new transports.File(options.file)
  ],
  exitOnError: false
})

module.exports = logger