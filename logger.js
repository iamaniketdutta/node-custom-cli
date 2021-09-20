const { createLogger, format, transports, config } = require('winston')
const { combine, timestamp, printf } = format;


/**
 * Return the custom log format
 */
const myFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level}]: ${message}`;
});

// Configuring the logger options for file transport
const options = {
  file: {
    filename: `${__dirname}/logs/app.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5
  }
};

// Creating logger instance with various options like transports, levels 
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

module.exports = logger;