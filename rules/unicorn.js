const {OFF, ERROR, WARN} = require('../constants');
const rules = require('eslint-plugin-unicorn/configs/all')

module.exports = {
  // https://github.com/sindresorhus/eslint-plugin-unicorn?tab=readme-ov-file#rules
  rules: {
    ...Object.entries(rules)
      .reduce((acc, [key]) => {
        acc[key] = OFF;

        return acc
      }, {})
  },
};
