const {OFF, ERROR, WARN} = require('../constants');
const {configs} = require('eslint-plugin-jsdoc')

module.exports = {
  rules: {
    ...Object.entries(configs.recommended.rules)
      .reduce((acc, [key]) => {
        acc[key] = OFF;

        return acc
      }, {})
  },
};
