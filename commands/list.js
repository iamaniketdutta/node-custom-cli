const Notes = require('../dbHandlers/notesDb');
const chalk = require('chalk');
const codes = require('../conf/codes.json');
const logger = require('../logger');

async function list (args) {
    try {
        const findCondition = {name : { $regex: args.name, $options: 'i' }, status : codes.ENABLED};
        const notesRecords = await Notes.find(findCondition).lean();
        //display message to user
        if(typeof notesRecords !== 'undefined' && notesRecords.length) {
            notesRecords.forEach(element => {
                console.log('----------------------------');
                for (const [key, value] of Object.entries(element)) {
                    if (key !== '_id')
                    console.log(chalk.greenBright(`${key.toUpperCase()}: ${value}`));
                }
                console.log('----------------------------');
            });
        } else {
            console.log(
                chalk.red.bold('You don\'t have any notes.')
            )
        }
    } catch (err) {
        logger.error("Unknown error: " + err)
    }
};

module.exports = list;