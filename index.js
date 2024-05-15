/**
 * Like js you have window and document
 */
// console.log(global);
// console.log(process);

// ES MODULES =================
// needs .js in import
// ============================
import getPosts, { getPostsLength } from './postController.js';

console.log(getPosts());

console.log(`Posts Length is: ${getPostsLength()}`);

// COMMON JS ==================
// no need to add .js to require
// ============================
// const { generateRandomNumber, celsiusToFarenheit } = require('./utils');

// console.log(`Random Number: ${generateRandomNumber()}`);

// console.log(`Celsius to farenhiet: ${celsiusToFarenheit(0)}`);
