var _ = require('lodash');


// Data storage
var data = [];

// Module functions
function add (name, text, id) {
  data.push({ name: name, text: text, id: id });
}

function list () {
  return _.cloneDeep(data);
}

function find (properties) {
  return _.cloneDeep(_.filter(data, properties));
}

// Export the module functions
module.exports = { add: add, list: list, find: find };

// Add some data and export it...
module.exports.add('SondreLerche', "That's a Volkswagen!", "1");
module.exports.add('RayRomano', "I feel like this is a dream...", "2");
module.exports.add('TheCynic', "Aim for the moon...", "3");