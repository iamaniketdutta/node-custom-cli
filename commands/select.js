const {Notes} = require('../dbHandlers/notesDb');
const chalk = require('chalk');
const codes = require('../conf/codes.json');
const logger = require('../logger');


/**
 * 
 * @param {object} args Arguments type with value for select sub-command
 */
async function select (args) {
    try {
        // curating find condition object with name like and status
        const findCondition = {name : { $regex: args.name, $options: 'i' }, status : codes.ENABLED};
        let selectCondition = {};
        if (args.field && typeof args.field === 'object') {
            // enumerate field argument to select only the specific field
            args.field.forEach(element => selectCondition[element] = 1);
        }
        const notesRecord = await Notes.findOne(findCondition).select(selectCondition).lean();
        //display message to user
        if(typeof notesRecord !== 'undefined' && notesRecord) {
            for (const [key, value] of Object.entries(notesRecord)) {
                if (!['_id', '__v'].includes(key))
                console.log(chalk.greenBright(`${key.toUpperCase()}: ${value}`));
            }
        } else {
            console.log(
                chalk.red.bold('You don\'t have any notes.')
            )
        }
    } catch (err) {
        logger.error("Unknown error: " + err)
    }
};

module.exports = select;