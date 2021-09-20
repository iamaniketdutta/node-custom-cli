const env = 'dev';

// This works like custom environment
const path = {
    dev: './dev.json',
}[env];

module.exports = require(path);
