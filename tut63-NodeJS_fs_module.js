// Node.js is a JavaScript runtime built on Chrome’s V8 JavaScript engine. 
// Node.js helps developers to write JavaScript code to run on the 
// server-side, to generate dynamic content and deliver to the web clients. 

// The two features that make Node.js stand-out are:
//     Event-driven
//     Non-blocking I/O model


///////////////////////////////////////////////////////////////////////////////////


// Synchronous approach: They are called blocking functions as it waits for 
// each operation to complete, only after that, it executes the next operation, 
// hence blocking the next command from execution i.e. a command will not be 
// executed until & unless the query has finished executing to get all the 
// result from previous commands.

// Asynchronous approach: They are called non-blocking functions as it never 
// waits for each operation to complete, rather it executes all operations in 
// the first go itself. The result of each operation will be handled once the 
// result is available i.e. each command will be executed soon after the 
// execution of the previous command. While the previous command runs in the 
// background and loads the result once it is finished processing the data.

// Use cases:
// If your operations are not doing very heavy lifting like querying huge data 
// from DB then go ahead with Synchronous way otherwise Asynchronous way.    
// In an Asynchronous way, you can show some progress indicator to the user 
// while in the background you can continue with your heavyweight works. This 
// is an ideal scenario for GUI based apps.


///////////////////////////////////////////////////////////////////////////////////


// About Node.js file system: To handle file operations like creating, 
// reading, deleting, etc., Node.js provides an inbuilt module called FS 
// (File System). Node.js gives the functionality of file I/O by providing 
// wrappers around the standard POSIX functions. All file system operations 
// can have synchronous and asynchronous forms depending upon user 
// requirements. 

// To use this File System module, use the require() method:
// var fs = require('fs');

// Common use for File System module:
//     Read Files
//     Write Files
//     Append Files
//     Close Files
//     Delete Files

///////////////////////////////////////////////////////////////////////////////////


// creating a file named 'tut63_reading1.txt' for reading purpose with some 
// text in it 


const fs = require("fs");

console.log('_________________________________________________________________________________________');
console.log('_________________________________________________________________________________________');

// synchronous file reading // does not need callback // avoided for big files
let data1=fs.readFileSync('tut63_reading1.txt'); 
console.log("the file 'tut63_reading1.txt' contains -> \n" + data1);

console.log('_________________________________________________________________________________________');

console.log("****************** before asynchronous call *********************");

// asynchronous file reading // callbacks will fire when the process ends
fs.readFile('tut63_reading1.txt', (err,data2) => {
if(err){throw err;}
console.log("file read a asynchronously \n")
console.log("the file 'tut63_reading1.txt' contains -> \n" + data2);
});

console.log("****************** After asynchronous call *********************");

console.log('_________________________________________________________________________________________');