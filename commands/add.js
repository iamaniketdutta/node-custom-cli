const {Notes} = require('../dbHandlers/notesDb');
const chalk = require('chalk');
const logger = require('../logger');


/**
 * 
 * @param {object} args Arguments type with value for add sub-command
 */
async function add (args) {
    try {
        // creating data object to be added to notes collection
        const addData = {name : args.name, notes : args.notes};
        // awaiting db transaction for saving the data
        const notesRecords = await Notes(addData).save();
        //display message to user
        if(typeof notesRecords !== 'undefined' && notesRecords.name) {
            console.log(chalk.green.bold(`Notes has been added successfully!`));

        } else {
            console.log(
                chalk.red.bold('Note can\'t be added.')
            )
        }
    } catch (err) {
        logger.error("Unknown error: " + err);
        console.log(chalk.red.bold('Note can\'t be added: ' + err));
    }
};


module.exports = add;