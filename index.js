const readline = require('readline-sync');

function start() {
    const content = {}

    content.searchTerm = askAndReturnSearchTerm();
    content.prefix = askAndReturnPrefix();

    function askAndReturnSearchTerm() {
        return readline.question('Type a wikipedia search term: ');
    }

    function askAndReturnPrefix() {
        const prefixes = ['Who is', 'What is', 'The history of']
        const selectedPrefix =  readline.keyInSelect(prefixes, 'Choose an option: ');

        return prefixes[selectedPrefix];
    }

    console.log(content);
}

start();
