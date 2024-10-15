const { BaseCommand } = require('lisk-sdk');

class HelloWorldCommand extends BaseCommand {
    async execute(context) {
        console.log('Hello, World!');
    }
}
