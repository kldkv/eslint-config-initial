const {OFF, ERROR, WARN} = require('../constants');
const {configs} = require('eslint-plugin-security')

module.exports = {
  // https://github.com/eslint-community/eslint-plugin-security/tree/v2.1.1?tab=readme-ov-file#rules
  rules: {
    ...Object.entries(configs.recommended.rules)
      .reduce((acc, [key]) => {
        acc[key] = OFF;

        return acc
      }, {})
  },
};
