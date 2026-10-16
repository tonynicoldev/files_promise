const fs = require('fs');
const INFILE = 'input.txt';

fs.readFile(INFILE, 'utf8', (err, data) => {
  if (err) {
    console.error('Read error:', err);
    return;
  }
  console.log(data); // Any code requiring data needs to be in the callback which becomes a mess
})

console.log(`Using data here will fail as it is out of scope: `);
//console.log(`Using data here will fail as it is out of scope: ${data}`);

