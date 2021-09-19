const env = 'dev';

let path = {
    dev: './dev.json',
}[env];

module.exports = require(path);
