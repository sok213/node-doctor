// Retrieves the JSON object from config.json file.
const configValues = require('./config');

// Exports the mLab URI by getting values from configValues and parsing it 
// into a string.
module.exports = {
  getDbConnectionString: () => {
    return 'DATABASE URI GOES HERE!!';
  }
};
