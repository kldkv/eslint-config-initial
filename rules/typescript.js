const {OFF, ERROR, WARN} = require('../constants');
const {configs} = require('@stylistic/eslint-plugin-ts')

module.exports = {
  rules: {
    ...Object.entries(configs["all-extends"].rules)
      .reduce((acc, [key]) => {
        acc[key] = OFF;

        return acc
      }, {})
  }
}
