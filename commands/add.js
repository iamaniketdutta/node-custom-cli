const Notes = require('../dbHandlers/notesDb');
const chalk = require('chalk');
const logger = require('../logger');

async function add (args) {
    try {
        const addData = {name : args.name, notes : args.notes};
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