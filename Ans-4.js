const os = require('os');

console.log('Operating System Info:');
console.log('------------------------');
console.log(`Platform      : ${os.platform()}`);
console.log(`Architecture  : ${os.arch()}`);
console.log(`CPU Cores     : ${os.cpus().length}`);
console.log(`CPU Model     : ${os.cpus()[0].model}`);
console.log(`Total Memory  : ${(os.totalmem() / (1024 ** 3)).toFixed(2)} GB`);
console.log(`Free Memory   : ${(os.freemem() / (1024 ** 3)).toFixed(2)} GB`);
console.log(`Uptime        : ${Math.floor(os.uptime() / 60)} minutes`);
console.log(`Hostname      : ${os.hostname()}`);
console.log(`Home Dir      : ${os.homedir()}`);
