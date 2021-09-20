const {Notes} = require('../dbHandlers/notesDb');
const chalk = require('chalk');
const logger = require('../logger');
const {exit} = require('../utility/utils');


/**
 * 
 * @param {boolean} multi Multi optional for delete all records
 * @param {object} args Arguments type with value for del sub-command
 */
async function del (multi, args) {
    try {
        // curating delete condition object
        const delCondition = {name : args.name};
        let notesDelRecords;
        if (multi) {
            // delete all records as per delCondition
            notesDelRecords = await Notes.deleteMany(delCondition);
        } else {
            // delete the first matched record as per delCondition
            notesDelRecords = await Notes.deleteOne(delCondition)
        }
        const deletedCount = notesDelRecords.deletedCount;
        //display message to user
        if(deletedCount > 1) {
            console.log(chalk.green.bold(`All notes with name: '${args.name}' has been deleted successfully!`));
        } else if (deletedCount == 1){
            console.log(chalk.green.bold(`Single notes with name: '${args.name}' has been deleted successfully!`));
        } else {
            console.log(
                chalk.red.bold('No matched notes deleted.')
            )
        }
    } catch (err) {
        logger.error("Unknown error: " + err)
    } finally {
        exit();
    }
};

module.exports = del;