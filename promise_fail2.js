
const fs = require('fs');
const INFILE = 'input.txt';

readFile(INFILE)
  .then(data => {
    console.log(data);   // Now all code using data has to go in here
  })
  .catch(err => {
    console.log(err);
  })


console.log(`Can't use log here as it is out of scope: `);
//console.log(`Can't use log here as it is out of scope: ${log}`);


//================== Functions =====================
function readFile(path, encoding = 'utf8') {
  return new Promise((resolve, reject) => {
    fs.readFile(path, encoding, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    })
  })
}



