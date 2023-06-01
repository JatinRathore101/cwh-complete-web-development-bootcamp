const fs = require("fs");

// Asynchronous - Opening File
console.log("opening file!");


// Reading a File: 
// The fs.read() method is used to read the file specified by fd. 
// This method reads the entire file into the buffer. 

// Syntax:
// fs.read(fd, buffer, offset, length, position, callback)

// Parameters:

//     fd: This is the file descriptor returned by fs.open() method.
    
//     buffer: This is the buffer that the data will be written to.
    
//     offset: This is the offset in the buffer to start writing at.
    
//     length: This is an integer specifying the number of bytes to read.
    
//     position: This is an integer specifying where to begin reading 
//     from in the file. If the position is null, data will be read 
//     from the current file position.
    
//     callback: It is a callback function that is called after reading 
//     of the file. It takes two parameters:
        
//         err: If any error occurs.
            
//         data: Contents of the file.

/////////////////////////////////////////////////////////////////////////////////


var buf = new Buffer.alloc(1024);

fs.open('tut65-open2.txt', 'r+', (err, fd) => { // fd => file descriptor
   if (err) {
      return console.error(err);
   }
   console.log("File opened successfully!");
   console.log("reading the file");
    
   fs.read(fd, buf, 0, buf.length, 0, (err, bytes) => {
      if (err){
         console.log(err);
      }
      console.log(bytes + " bytes read");
       
      // Print only read bytes to avoid junk.
      if(bytes > 0){
         console.log(buf.toString());
        //  console.log(buf.slice(0, bytes).toString());
      }
   });
});


// ********************************************************************************

// FOR MORE UNDERSTANDING OF fs FILE SYSTEM MODULE (write, append, delete)
// REFER gfg ARTICLE
// https://www.geeksforgeeks.org/node-js-file-system/

// ********************************************************************************