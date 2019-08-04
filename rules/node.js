const {OFF, ERROR, WARN} = require('../constants');

module.exports = {
  rules: {
    /*
     * Сброс всех правил в состояние "Нет ошибки". Для плавной интеграции
     */

    // url: https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-extraneous-import.md
    'node/no-extraneous-import': OFF,

    // url: https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-extraneous-require.md
    'node/no-extraneous-require': OFF,

    // url: https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-import.md
    'node/no-missing-import': OFF,

    // url: https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-require.md
    'node/no-missing-require': OFF,

    // url: https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-bin.md
    'node/no-unpublished-bin': OFF,

    // url: https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-import.md
    'node/no-unpublished-import': OFF,

    // url: https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-require.md
    'node/no-unpublished-require': OFF,

    // url: https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/es-builtins.md
    'node/no-unsupported-features/es-builtins': OFF,

    // url: https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/es-syntax.md
    'node/no-unsupported-features/es-syntax': OFF,

    // url: https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/node-builtins.md
    'node/no-unsupported-features/node-builtins': OFF,

    // url: https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/process-exit-as-throw.md
    'node/process-exit-as-throw': OFF,

    // url: https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/shebang.md
    'node/shebang': OFF,

    // url: https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-deprecated-api.md
    'node/no-deprecated-api': OFF,

    // url: https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/exports-style.md
    'node/exports-style': OFF,

    // url: https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/file-extension-in-import.md
    'node/file-extension-in-import': OFF,

    // url: https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/buffer.md
    'node/prefer-global/buffer': OFF,

    // url: https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/console.md
    'node/prefer-global/console': OFF,

    // url: https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/process.md
    'node/prefer-global/process': OFF,

    // url: https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/text-decoder.md
    'node/prefer-global/text-decoder': OFF,

    // url: https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/text-encoder.md
    'node/prefer-global/text-encoder': OFF,

    // url: https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/url-search-params.md
    'node/prefer-global/url-search-params': OFF,

    // url: https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/url.md
    'node/prefer-global/url': OFF,

    // url: https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-promises/dns.md
    'node/prefer-promises/dns': OFF,

    // url: https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-promises/fs.md
    'node/prefer-promises/fs': OFF,
  },
};
