const Notes = require('../dbHandlers/notesDb');
const chalk = require('chalk');
const logger = require('../logger');

async function del (multi, args) {
    try {
        const delCondition = {name : args.name};
        let notesDelRecords;
        if (multi) {
            notesDelRecords = await Notes.deleteMany(delCondition);
        } else {
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
    }
};

module.exports = del;