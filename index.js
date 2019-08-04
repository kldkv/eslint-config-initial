module.exports = {
  parser: 'babel-eslint',
  plugins: [],
  extends: [
    './rules/base',
  ].map(require.resolve),
  rules: {},
};
