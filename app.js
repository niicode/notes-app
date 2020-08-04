const chalk = require('chalk')
const yargs = require('yargs')
const { version } = require('yargs')



// add, remove, read,list

//Adding a note 
yargs.command({
    command: 'add',
    describe: 'You have to add a note here',
    builder:{
        title:{
            describe:'Add notes title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Add text here',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
    }
})

//Create remove command 
yargs.command({
    command: 'remove',
    describe: 'This removes notes from the commandline memory',
    handler: function(){
        console.log('You have removed the commands from the commandline')
    }
})

//Add read command here
yargs.command({
    command: 'read',
    describe: '',
    handler: function(){
        console.log('Read only')
    }
})

//List all notes here
yargs.command({
    command: 'list',
    describe: '',
    handler: function(){
        console.log('Showing the list of all your notes')
    }
})

yargs.parse()