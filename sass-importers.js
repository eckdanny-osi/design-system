const tilde = require('node-sass-tilde-importer')
const json = require('node-sass-json-importer')()
const js = require('node-sass-js-importer')

module.exports = [tilde, js]

// const tilde = require('node-sass-tilde-importer');
// const json = require('node-sass-json-importer')();
// const js = require('node-sass-js-importer');

// function myImporter(url, prev, done) {
//   debugger;
//   console.log({ url, prev });
//   return null;
//   // done({ file, contents });
// }

// function wtf(url, prev, done) {
//   // if (/.+\.js/.test(url)) {
//   done(new Error('WTF'));
//   // }
//   return null;
// }
