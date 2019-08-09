const {OFF, ERROR, WARN} = require('../constants');

module.exports = {
  rules: {
    /*
     * Сброс всех правил в состояние "Нет ошибки". Для плавной интеграции
     */

    // url: https://github.com/prettier/eslint-plugin-prettier
    'prettier/prettier': OFF,
  },
};
