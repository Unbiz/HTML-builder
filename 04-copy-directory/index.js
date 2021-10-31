const fs = require('fs');
const fsProm = require('fs/promises');
const path = require('path');

const newFolderPath = path.join(__dirname, 'files-copy');
const baseFolderPath = path.join(__dirname, 'files');

async function copyFolder() {
  try {
    await fsProm.access(newFolderPath, fs.constants.W_OK);
    const oldCopyFiles = await fsProm.readdir(newFolderPath);
    oldCopyFiles.forEach(async (file) => {
      const pathToFile = path.join(newFolderPath, file);
      fsProm.unlink(pathToFile);
    });
  } catch {
    await fsProm.mkdir(newFolderPath, { recursive: true });
  }

  const files = await fsProm.readdir(baseFolderPath);

  files.forEach(async (file) => {
    const baseFile = path.join(__dirname, 'files', file);
    const newFile = path.join(__dirname, 'files-copy', file);
    await fsProm.copyFile(baseFile, newFile);
  });
}

copyFolder();