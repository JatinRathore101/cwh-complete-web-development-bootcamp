// Open a File: The fs.open() method is used to create, read, or write a 
// file. The fs.readFile() method is only for reading the file and 
// fs.writeFile() method is only for writing to the file, whereas fs.open() 
// method does several operations on a file. 


// fs.open(path, flags, mode, callback)

// Parameters:

//     path: It holds the name of the file to read or the entire path if 
//     stored at other locations.

//     flags: Flags indicate the behavior of the file to be opened. All 
//     possible values are ( r, r+, rs, rs+, w, wx, w+, wx+, a, ax, a+, ax+).

//     mode: Sets the mode of file i.e. r-read, w-write, r+ -readwrite. 
//     It sets to default as readwrite.     

//     err: If any error occurs.

//     data: Contents of the file. It is called after the open operation 
//     is executed.

//     ********************* flags and mods are similar things and can be 
//     ignored for normal readwrite file usage **************************

///////////////////////////////////////////////////////////////////////////////////////

const fs = require("fs");

// Asynchronous - Opening File
console.log("opening file!");

// fs.open('tut64-open1.txt', function(err, fd) {
fs.open('tut64-open1.txt', 'r+', function (err, fd1) {
    if (err) 
    {
        return console.error(err); // or // throw err;
    }
//  ********** fd is NOT data of file // it is file descriptor ****************
    console.log("File open successfully");
    console.log(`-> ` + fd1);
    console.log('here just opened=> no callback fired for reading');
});

// Reading a File: 
// The fs.read() method is used to read the file specified by fd. 
// This method reads the entire file into the buffer. 
// Syntax:
// fs.read(fd, buffer, offset, length, position, callback)







