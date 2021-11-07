const fs = require('fs');
const path = require('path');
const readline = require('readline');
const process = require('process');
const input = process.stdin;
const output = process.stdout;

const filePath = path.join(__dirname, 'text.txt');
let writeableStream = fs.createWriteStream(filePath);
const rl = readline.createInterface({ input, output });

rl.write('Please, input text\n(for quit press: "CTRL+C" or print: "exit"):\n');

function exitProgram() {
  rl.write('Good Bye!');
  process.exit(0);
}

rl.addListener('line', (input) => {
  if (input === 'exit') {
    exitProgram();
  }
  writeableStream.write(input + '\n');
});

rl.addListener('close', exitProgram);