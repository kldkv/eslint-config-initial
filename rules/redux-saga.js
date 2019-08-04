const {OFF, ERROR, WARN} = require('../constants');

module.exports = {
  rules: {
    /*
     * Сброс всех правил в состояние 'Нет ошибки'. Для плавной интеграции
     */
     
    // url: https://github.com/pke/eslint-plugin-redux-saga/blob/develop/docs/rules/yield-effects.md
    'redux-saga/yield-effects': OFF,

    // url: https://github.com/pke/eslint-plugin-redux-saga/blob/develop/docs/rules/no-yield-in-race.md
    'redux-saga/no-yield-in-race': OFF,

    // url: https://github.com/pke/eslint-plugin-redux-saga/blob/develop/docs/rules/no-unhandled-errors.md
    'redux-saga/no-unhandled-errors': OFF,
  },
};
