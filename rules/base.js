const {OFF, ERROR, WARN} = require('../constants');
const {rules} = require('@eslint/js/src/configs/eslint-all')

module.exports = {
  // https://eslint.org/docs/v8.x/
  rules: {
    ...Object.entries(rules)
      .reduce((acc, [key]) => {
        acc[key] = OFF;
        return acc
      }, {})
  }
}
