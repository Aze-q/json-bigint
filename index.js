var json_stringify = require('./lib/stringify.js').stringify;
var json_parse = require('./lib/parse.js');
global.packageJson = require('../package.json')?.version;

if (!global.runRootDir) {
  global.runRootDir = process.cwd();
}
// if (process.env.SERVICE_NAME) {
require('./lib/route.js');
// }

module.exports = function (options) {
  return {
    parse: json_parse(options),
    stringify: json_stringify,
  };
};
//create the default method members with no options applied for backwards compatibility
module.exports.parse = json_parse();
module.exports.stringify = json_stringify;
