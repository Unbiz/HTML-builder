const fs = require('fs');
const path = require('path');

const needPath = path.join(__dirname, 'text.txt');

const readable = fs.createReadStream(needPath, 'utf8');
readable.on('data', (chunk) => {
  process.stdout.write(chunk);
});