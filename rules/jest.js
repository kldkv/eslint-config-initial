const {OFF, ERROR, WARN} = require('../constants');
const {configs} = require("eslint-plugin-jest");

module.exports = {
  rules: {
    ...Object.entries(configs.all.rules)
      .reduce((acc, [key]) => {
        acc[key] = OFF;

        return acc
      }, {})
  },
};
