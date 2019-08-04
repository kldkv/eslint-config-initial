const {OFF, ERROR, WARN} = require('../constants');

module.exports = {
  rules: {
    /*
     * Сброс всех правил в состояние "Нет ошибки". Для плавной интеграции
     */

    // url: https://github.com/bryanrsmith/eslint-plugin-sort-class-members/blob/master/README.md
    'sort-class-members/sort-class-members': OFF,
  },
};
