const chalk = require('chalk');

//import the greet module that is in the current folder
const greet = require('./greet');

const styledMessage = 
chalk.bgGreen.black(greet('Jason'));
console.log(styledMessage)


var figlet = require('figlet');
 
figlet('Justin Tarantino', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});

figlet.text('Boo!', {
    font: 'Ghost',
    horizontalLayout: 'default',
    verticalLayout: 'default'
}, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
});