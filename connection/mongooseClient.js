const mongoose = require('mongoose');
const config = require('../conf/config');
const logger = require('../logger');


/**
 * Configure Mongoose => connect, listen to mongoose(MongoDB's wrapper)
 */
exports.configure = async () => {
    try {
        const connectionOption = {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        };

        //mongo connection
        // Create the database connection
        await mongoose.connect(config.DB_URL, connectionOption);
        mongoose.Promise = Promise;
        const db = mongoose.connection;

        // CONNECTION EVENTS
        // When successfully connected
        db.on('connected', () => {
            logger.info('Mongoose default connection open to ' + config.DB_URL + ' and time is ' + new Date());
        });

        db.on('reconnected', () => {
            logger.info('Connection Reestablished');
        });

        // If the connection throws an error
        db.on('error', (err) => {
            logger.error('Mongoose default connection error: ' + err);
        });

        // When the connection is disconnected
        db.on('disconnected', () => {
            logger.info('Mongoose default connection disconnected');
        });

        db.on('close', () => {
            logger.info('Connection Closed');
        });
    } catch (err) {
        logger.error("Unknown error: " + err)
    }
}