const path = require('path');

const filePath = '/users/john/documents/report.txt';

console.log('Path Manipulation:');
console.log('-------------------');
console.log(`Directory Name : ${path.dirname(filePath)}`);
console.log(`Base Name      : ${path.basename(filePath)}`);
console.log(`Extension      : ${path.extname(filePath)}`);

const newPath = path.join('/users', 'john', 'downloads', 'image.png');
console.log(`Joined Path    : ${newPath}`);

const resolvedPath = path.resolve('folder', 'subfolder', 'file.txt');
console.log(`Resolved Path  : ${resolvedPath}`);
