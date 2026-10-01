// we have a fs module in Node
// file FileSystem(fs) - read , write ,delete ,streams and make directory


// what is metadata - metadata is the information about file 

// Also remember: fs operations can be asynchronous, so Node.js can use
//  the libuv thread pool for many filesystem operations instead of blocking the main JavaScript thread.

import fs from "fs"

// | Method            | Purpose                       |
// | ----------------- | ----------------------------- |
// | `fs.readFile()`   | Read a file                   |
// | `fs.writeFile()`  | Create/write a file           |
// | `fs.appendFile()` | Add data to a file            |
// | `fs.unlink()`     | Delete a file                 |
// | `fs.rename()`     | Rename/move a file            |
// | `fs.mkdir()`      | Create a folder               |
// | `fs.rmdir()`      | Delete a folder               | works only for empty folder
// | `fs.existsSync()` | Check if a file/folder exists |
// | Method        | Purpose                          |
// | ------------- | -------------------------------- |
// | `fs.rm()`     | Remove a file or directory       | this works even if folder have files in folder 
// | `fs.rmSync()` | Synchronous version of `fs.rm()` |




// const fs = require("fs");

// fs.readFile("data.txt", "utf8", (err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     }

//     console.log(data);
// });

// when using await we will need to use the format where we are not giving a call back function 
// when usiing await you get optioon to put call back function where you can get your data in
// data params if function return data 