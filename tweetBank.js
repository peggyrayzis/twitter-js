var _ = require('lodash');

// Data storage
var data = [];

// Module functions
function add (name, text) {
  data.push({ name: name, text: text });
}

function list () {
  return _.cloneDeep(data);
}

function find (properties) {
  return _.cloneDeep(_.filter(data, properties));
}

// Export the module functions
module.exports = { add: add, list: list, find: find };

