const fs = require('fs');

// ******reading files******
fs.readFile('./docs/blog1.txt', (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
})

// readFile is an asynchronous method. The console.log below is going to be
// be output first before the readFile happens.
// 1. readFile fires and starts to process of reading the first argument you gave it. it takes some time to do
// 2. javascript will carry on and get to the below console.log
// 3. then once readFile is done reading, it will fire the callback function
// 4. then the data on line 8 is logged to the console
console.log('last line');

// *******writing files********
fs.writeFile('./docs/blog1.txt', 'node is confusing', () => {
  console.log('file was written');
});

// if the file doesn't exist, this code below will create the file. only blog1 existed before the following line ran
fs.writeFile('./docs/blog2.txt', 'learning node', () => {
console.log('file was written');
});

// writeFile is also asynchronous.

// ********directories*************
if (!fs.existsSync('./assets')) {  // checking to see if the folder name exists, if not, then create the folder. existsSync is synchronous and is fast
  fs.mkdir('./assets', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('folder created');
  })
} else {
  fs.rmdir('./assets', (err) => {  // rmdir is asynchronous
    if (err) {
      console.log(err);
    }
    console.log('folder deleted');
  })
}

// ******deleting files********
if (fs.existsSync('./docs/deleteme.txt')) {
  fs.unlink('./docs/deleteme.txt', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('file deleted');
  })
}
