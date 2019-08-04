const {OFF, ERROR, WARN} = require('../constants');

module.exports = {
  rules: {
    /*
     * Сброс всех правил в состояние "Нет ошибки". Для плавной интеграции
     */

    // url: https://reactjs.org/docs/hooks-rules.html
    // docs: https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks
    'react-hooks/rules-of-hooks': OFF,
    'react-hooks/exhaustive-deps': OFF,
  },
};
