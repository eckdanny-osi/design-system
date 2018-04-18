const path = require('path');
const fs = require('fs');
const Mustache = require('mustache');

module.exports = function(componentName, parentDir) {
  const targetDir = path.resolve(process.cwd(), parentDir || '', componentName);

  if (fs.existsSync(targetDir)) {
    process.stderr.write(`ERROR: ${targetDir} already exists!\n`);
    process.exit(1);
  }

  const tmpDir = fs.mkdtempSync('cwds-');
  const newFiles = [];

  try {
    const tmpls = fs.readdirSync(path.resolve(__dirname, 'tmpls'));
    tmpls.forEach(file => {
      const tmpl = fs.readFileSync(
        path.resolve(__dirname, 'tmpls', file),
        'utf8'
      );
      const out = Mustache.render(tmpl, { Component: componentName });
      const outFile = file
        .replace('Component', componentName)
        .replace(/\.mustache$/, '');
      const outPath = path.resolve(tmpDir, outFile);
      fs.appendFileSync(outPath, out);
      newFiles.push(outFile);
    });
  } catch (error) {
    process.stderr.write(`ERROR: An unknown error occured!\n`);
    fs.rmdirSync(tmpDir);
    process.exit(2);
  }

  fs.renameSync(tmpDir, targetDir);

  const main = path.resolve(targetDir, '../index.js');
  if (fs.existsSync(main)) {
    fs.appendFileSync(
      main,
      `export { default as ${componentName} } from './${componentName}';\n`
    );
  }

  const newFileList = newFiles.reduce(
    (prev, newfile, acc) => `${prev}\n  ${newfile}`,
    ''
  );

  const relPath = path.relative(process.cwd(), targetDir);

  process.stdout.write(
    `Added ${componentName} component${
      componentName === relPath ? ':' : ' in ./' + relPath + ':'
    } ${newFileList}\n`
  );
  process.exit(0);
};
