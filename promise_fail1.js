
const fs = require('fs');
const INFILE = 'input.txt';


async function getLog(path) {
  let log = await readFile(path); // Now all code using data has to go in here
  console.log(log);
}

const log = getLog(INFILE); // log is pointless as execution has already moved past here

//console.log(`Can't use log here as it is out of scope: `);
console.log(`Can't use log here as it is out of scope: ${log}`);


//====================== Functions ==========================
function readFile(path, encoding = 'utf8') {
  return new Promise((resolve, reject) => {
    fs.readFile(path, encoding, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    })
  })
}
