const fsProm = require('fs/promises');
const path = require('path');

const needPath = path.join(__dirname, 'secret-folder');

async function printFileInfo(file) {
  const filePath = path.join(needPath, file);
  const stat = await fsProm.stat(filePath);

  if (!stat.isDirectory()) {
    const ext = path.extname(file);
    const name = path.basename(file, ext);
    const info = `${name} - ${ext.slice(1)} - ${stat.size} b\n`;
    process.stdout.write(info);
  }
}

async function runRead() {
  const files = await fsProm.readdir(needPath);

  files.forEach(async (file) => {
    printFileInfo(file);
  });
}

runRead();