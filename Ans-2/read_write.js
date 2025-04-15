const fs = require('fs');
const path=require('path');
const inputFilePath = path.join('G:', 'nodejs', 'NodeJs-Assignment', 'Ans-2', 'input.txt');
const outputFilePath = path.join('G:', 'nodejs', 'NodeJs-Assignment', 'Ans-2', 'output.txt');
fs.readFile(inputFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the input file:', err);
    return;
  }

  fs.writeFile(outputFilePath, data, (err) => {
    if (err) {
      console.error('Error writing to the output file:', err);
      return;
    }
    console.log('Content successfully copied to output.txt');
  });
});
