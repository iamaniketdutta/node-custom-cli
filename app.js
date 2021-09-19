#! /usr/bin/env node

const logger = require('./logger');
const { mongooseClient } = require('./connection/index');
const { program } = require('commander');
const select = require('./commands/select');
const list = require('./commands/list');
const add = require('./commands/add');
const del = require('./commands/delete');

//mongoDB configuration
mongooseClient.configure();

program.version('1.0.0');

// Display the selected field of notes
// $ notes select --field=value... --name="notes name" 
// $ notes s --field=value... --name="notes name"
program
    .command('select') // sub-command name is select
    .alias('s') // alternative sub-command is `s`
    .description('List the notes with particular field') // command description
    .option('-f, --field [field...]', 'The field to display. If not specified, all fields will be displayed.')
    .requiredOption('-na, --name <name>', 'The notes\'s name to display for. Required.')
    // function to execute when command is uses
    .action(select)

// Display the notes
// $ notes list --name="notes name" 
// $ notes ls --name="notes name"
program
    .command('list') // sub-command name is list
    .alias('li') // alternative sub-command is `li`
    .description('List all the notes') // command description
    .requiredOption('-na, --name <name>', 'The name to display the notes for. Required.')
    // function to execute when command is uses
    .action(list)

// Add notes
// $ notes add --name="notes name" --notes="notes body"
// $ notes a --name="notes name" --notes="notes body"
program
    .command('add') // sub-command name is add
    .alias('a') // alternative sub-command is `a`
    .description('Add a note') // command description
    .requiredOption('-na, --name <name>', 'The name to be added for a notes. Required.')
    .requiredOption('-no, --notes <notes>', 'The notes. Required.')
    // function to execute when command is uses
    .action(add)

// Delete note/s
// $ notes delete --name="notes name"
// $ notes del multi --name="notes name"
program
    .command('delete [multi]') // sub-command name is delete
    .alias('del') // alternative sub-command is `del`
    .description('Delete note/s') // command description
    .requiredOption('-na, --name <name>', 'The name to be added for a notes. Required.')
    // function to execute when command is uses
    .action(del)

// allow commander to parse the commands, arguments, and defaults to `process.argv`
program.parse();

/**
 * Logs the error on uncaughtException
 */
process.on('uncaughtException', (err) => {
    logger.error('Uncaught exception', err)
})

/**
 * Logs the error on unhandledRejection
 */
process.on('unhandledRejection', (err) => {
    logger.error('unhandled rejection', err)
})