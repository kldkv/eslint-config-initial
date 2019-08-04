const {OFF, ERROR, WARN} = require('../constants');

module.exports = {
  rules: {
    /*
     * Сброс всех правил в состояние "Нет ошибки". Для плавной интеграции
     */

    // url: https://github.com/Tibfib/eslint-plugin-import-helpers/blob/master/docs/rules/order-imports.md
    'import-helpers/order-imports': OFF,
  },
};
