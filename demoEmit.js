import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();

function greetHandler(name) {
  console.log('Hellow ' + name);
}
function goodbyeHandler(name) {
  console.log('Goodbye ' + name);
}

myEmitter.on('greet', greetHandler);
myEmitter.on('goodbye', goodbyeHandler);

myEmitter.emit('greet', 'Justin');
myEmitter.emit('goodbye', 'Justin');

// Error Handling
myEmitter.on('err', (err) => console.log('An error occured', err));

// Simulate Error
myEmitter.emit('err', new Error('Something went wrong'));
