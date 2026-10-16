const fs = require('fs');
const INFILE1 = 'input.txt';
const INFILE2 = 'promise_main.js';

main()

async function main() {
  try { // All code using data or data2 has to go in here but it looks more like a sequential program
    let data = await readFile(INFILE1);
    console.log(data);
    console.log(`More sequential code`);
    let data2 = await readFile(INFILE2);
    console.log(data2);
    console.log(`More sequential code - data and data2 still available`);
  } catch (err) {
    console.log(err.message);
  }
}

console.log(`More sequential code here but data and data2 out of scope\n`);


// ============= Functions =================
function readFile(path, encoding = 'utf8') {
  return new Promise((resolve, reject) => {
    fs.readFile(path, encoding, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    })
  })
}
