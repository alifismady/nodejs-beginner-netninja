const fs = require('fs');

const readStream = fs.createReadStream('./tesdocs/blog3.txt', { encoding: 'utf8'})
const writeStream = fs.createWriteStream('./tesdocs/blog4.txt');

// readStream.on('data', (chunk) => {
//     console.log('-----new chunk-----')
//     console.log(chunk);
//     writeStream.write('\n NEW CHUNK \n');
//     writeStream.write(chunk)
// });

// piping
readStream.pipe(writeStream)