const {OFF, ERROR, WARN} = require('../constants');

module.exports = {
  rules: {
    /*
     * Сброс всех правил в состояние "Нет ошибки". Для плавной интеграции
     */

    // url: https://github.com/nodesecurity/eslint-plugin-security#detdetect-buffer-noassert
    'security/detect-buffer-noassert': OFF,

    // url: https://github.com/nodesecurity/eslint-plugin-security#detect-child-process
    'security/detect-child-process': OFF,

    // url: https://github.com/nodesecurity/eslint-plugin-security#detect-disable-mustache-escape
    'security/detect-disable-mustache-escape': OFF,

    // url: https://github.com/nodesecurity/eslint-plugin-security#detect-eval-with-expression
    'security/detect-eval-with-expression': OFF,

    // url: https://github.com/nodesecurity/eslint-plugin-security#detect-new-buffer
    'security/detect-new-buffer': OFF,

    // url: https://github.com/nodesecurity/eslint-plugin-security#detect-no-csrf-before-method-override
    'security/detect-no-csrf-before-method-override': OFF,

    // url: https://github.com/nodesecurity/eslint-plugin-security#detect-non-literal-fs-filename
    'security/detect-non-literal-fs-filename': OFF,

    // url: https://github.com/nodesecurity/eslint-plugin-security#detect-non-literal-regexp
    'security/detect-non-literal-regexp': OFF,

    // url: https://github.com/nodesecurity/eslint-plugin-security#detect-non-literal-require
    'security/detect-non-literal-require': OFF,

    // url: https://github.com/nodesecurity/eslint-plugin-security#detect-object-injection
    'security/detect-object-injection': OFF,

    // url: https://github.com/nodesecurity/eslint-plugin-security#detect-possible-timing-attacks
    'security/detect-possible-timing-attacks': OFF,

    // url: https://github.com/nodesecurity/eslint-plugin-security#detect-pseudoRandomBytes
    'security/detect-pseudoRandomBytes': OFF,

    // url: https://github.com/nodesecurity/eslint-plugin-security#detect-unsafe-regex
    'security/detect-unsafe-regex': OFF,

    // url: https://github.com/nodesecurity/eslint-plugin-security#detect-unsafe-regex
  },
};
