const {OFF, ERROR, WARN} = require('../constants');

module.exports = {
  rules: {
    /*
     * Сброс всех правил в состояние "Нет ошибки". Для плавной интеграции
     */

    // desc: Обязательная точка с запятой
    // url: https://eslint.org/docs/rules/semi
    // example: var name = 'ESLint'  ->  var name = 'ESLint';
    'semi': OFF,

    // desc: Обязательное форматирование короткой стрелочной функции в блочную стрелочную
    // url: https://eslint.org/docs/rules/arrow-body-style
    'arrow-body-style': OFF,

    // desc: Обязательные пробелы в стрелочных функциях a => {}
    // url: https://eslint.org/docs/rules/arrow-spacing
    // example: (a)=>{};  ->  (a) => {};
    'arrow-spacing': OFF,

    // desc: Обязательные скобки в стрелочных функциях
    // url: https://eslint.org/docs/rules/arrow-parens
    // example: a => {}  ->  (a) => {}
    'arrow-parens': OFF,

    // desc: Пробелы вокруг инфиксных операторов
    // url: https://eslint.org/docs/rules/space-infix-ops
    // example: a+b/a?b:c  ->  a + b / a ? b : c
    'space-infix-ops': OFF,

    // desc: Пробелы для унарных операторов
    // url: https://eslint.org/docs/rules/space-unary-ops
    // example: typeof!1;  ->  typeof !1;
    'space-unary-ops': OFF,

    // desc: Висячая запятая
    // url: https://eslint.org/docs/rules/comma-dangle
    'comma-dangle': OFF,

    // desc: Убирать лишние ;
    // url: https://eslint.org/docs/rules/no-extra-semi
    'no-extra-semi': OFF,

    // Запрет использования var
    // url: https://eslint.org/docs/rules/no-var
    'no-var': OFF,

    // desc: Максимальная длина строки
    // url: https://eslint.org/docs/rules/max-len
    // no auto fix
    'max-len': OFF,

    // Обязательно инициализировать переменные
    // url: https://eslint.org/docs/rules/init-declarations
    // no auto fix
    'init-declarations': OFF,

    // desc: Убирать необзятельное превращение к bool
    // url: https://eslint.org/docs/rules/no-extra-boolean-cast
    // example: !!!some  ->  !some
    'no-extra-boolean-cast': OFF,

    // desc: Обязательные скобки в условиях if
    // url: https://eslint.org/docs/rules/curly
    'curly': OFF,

    // desc: Приоритет использования доступа к свойствам объекта через точку
    // url: https://eslint.org/docs/rules/dot-notation
    'dot-notation': OFF,

    // desc: Обязательное строгое сравнение === !==
    // url: https://eslint.org/docs/rules/eqeqeq
    // weak auto fix
    'eqeqeq': OFF,

    // desc: Запретить плавающие значения var num = .5;
    // url: https://eslint.org/docs/rules/no-floating-decimal
    'no-floating-decimal': OFF,

    // desc: Запретить лишние пробелы
    // url: https://eslint.org/docs/rules/no-multi-spaces
    'no-multi-spaces': OFF,

    // desc: Переносы фигурных скобок
    // url: https://eslint.org/docs/rules/brace-style
    'brace-style': OFF,

    // desc: Пробелы вокруг запятой
    // url: https://eslint.org/docs/rules/comma-spacing
    'comma-spacing': OFF,

    // desc: Пробелы в свойствах объектов
    // url: https://eslint.org/docs/rules/computed-property-spacing
    'computed-property-spacing': OFF,

    // desc: Убрать пробелы перед вызовом функции
    // url: https://eslint.org/docs/rules/func-call-spacing
    'func-call-spacing': OFF,

    // desc: Перенос аргументов функции
    // url: https://eslint.org/docs/rules/function-paren-newline
    'function-paren-newline': OFF,

    // desc: Индентация в два пробела
    // url: https://eslint.org/docs/rules/indent
    'indent': OFF,

    // desc: Кавычки в jsx
    // url: https://eslint.org/docs/rules/jsx-quotes
    'jsx-quotes': OFF,

    // desc: Кавычки
    // url: https://eslint.org/docs/rules/quotes
    'quotes': OFF,

    // desc: Пробелы между ключами в объектах
    // url: https://eslint.org/docs/rules/key-spacing
    'key-spacing': OFF,

    // desc: Пробелы между ключами в объектах
    // url: https://eslint.org/docs/rules/keyword-spacing
    'keyword-spacing': OFF,

    // desc: Пробелы между членами в классах
    // url: https://eslint.org/docs/rules/lines-between-class-members
    'lines-between-class-members': OFF,

    // desc: Обязательно вызывать new ClassName со скобками new Person()
    // url: https://eslint.org/docs/rules/new-parens
    'new-parens': OFF,

    // desc: Запрет мультилиний
    // url: https://eslint.org/docs/rules/no-multiple-empty-lines
    'no-multiple-empty-lines': OFF,

    // desc: Запрет висячих пробелов
    // url: https://eslint.org/docs/rules/no-trailing-spaces
    'no-trailing-spaces': OFF,

    // desc: Пробелы и переносы между свойствами
    // url: https://eslint.org/docs/rules/no-whitespace-before-property
    'no-whitespace-before-property': OFF,

    // desc: Новая строка в объектах после { }
    // url: https://eslint.org/docs/rules/object-curly-newline
    'object-curly-newline': OFF,

    // desc: Отсутсвие пробелов вокруг скобок {}
    // url: https://eslint.org/docs/rules/object-curly-spacing
    'object-curly-spacing': OFF,

    // desc: Запретить перечисление через запятую переменных, при объявлении
    // url: https://eslint.org/docs/rules/one-var
    'one-var': OFF,

    // desc: Запретить перечисление через запятую переменных, при объявлении
    // url: https://eslint.org/docs/rules/one-var-declaration-per-line
    'one-var-declaration-per-line': OFF,

    // desc: Предпочитать const
    // url: https://eslint.org/docs/rules/prefer-const
    'prefer-const': OFF,

    // desc: * в генераторах func* foo()
    // url: https://eslint.org/docs/rules/generator-star-spacing
    'generator-star-spacing': OFF,

    // desc: По возможности использовать сокращенную нотацию в объектах
    // url: https://eslint.org/docs/rules/object-shorthand
    'object-shorthand': OFF,

    // desc: Предпочитать бэктики для конкатенации строк
    // url: https://eslint.org/docs/rules/prefer-template
    'prefer-template': OFF,

    // desc: Пробел перед rest/spread операторами
    // url: https://eslint.org/docs/rules/rest-spread-spacing
    'rest-spread-spacing': OFF,

    // desc: `Hello ${people.name}!`
    // url: https://eslint.org/docs/rules/template-curly-spacing
    'template-curly-spacing': OFF,

    // desc: * в yield
    // url: https://eslint.org/docs/rules/yield-star-spacing
    'yield-star-spacing': OFF,

    // Конфликтует с импортом флоу и его применением
    // url: https://eslint.org/docs/rules/no-use-before-define
    'no-use-before-define': OFF,

    // desc: Новая линия после чего угодно. Надо конфигурировать
    // url: https://eslint.org/docs/rules/padding-line-between-statements
    'padding-line-between-statements': OFF,

    // desc: Операторы при переносе на новую строку переносятся в левую часть
    /* example:
     * if (someCondition ||
     * otherCondition ||
     * otherCondition2)
       =>
     * if (someCondition
     * || otherCondition
     * || otherCondition2)
     */
    // url: https://eslint.org/docs/rules/operator-linebreak
    'operator-linebreak': OFF,

    // desc: Убирает лишние переносы на новую строку.
    // example:
    /*
     * if (a) {
     * return a
     *           // Error
     * }
     */
    // url: https://eslint.org/docs/rules/padded-blocks
    'padded-blocks': OFF,

    // example: var a; delete a;
    // url: https://eslint.org/docs/rules/no-delete-var
    'no-delete-var': OFF,

    // desc: Дублирование аргументов в функции
    // example: (a, a, a, a) => {}
    // url: https://eslint.org/docs/rules/no-dupe-args
    'no-dupe-args': OFF,

    // desc: Дублирование свойств в классах
    // example: class A {some = () => {}, some = 'string'}
    // url: https://eslint.org/docs/rules/no-dupe-class-members
    'no-dupe-class-members': OFF,

    // desc: Дублирование ключей в объекте
    // example: {some: () => {}, some: 'string'}
    // url: https://eslint.org/docs/rules/no-dupe-keys
    'no-dupe-keys': OFF,

    // desc: Дублирование значений в switch case
    // example: switch (a) {case 1: ..., case 1: ...}
    // url: https://eslint.org/docs/rules/no-duplicate-case
    'no-duplicate-case': OFF,

    // desc: Дублирование импортов
    // example: import a from 'path/file'; import b from 'path/file'
    // url: https://eslint.org/docs/rules/no-duplicate-imports
    'no-duplicate-imports': OFF, // Пока отключим. Конфликт с типами флоу

    // example: try {} catch(e) {e = 'something'}
    // url: https://eslint.org/docs/rules/no-ex-assign
    'no-ex-assign': OFF,

    // example: function foo() {foo = bar;}
    // url: https://eslint.org/docs/rules/no-func-assign
    'no-func-assign': OFF,

    // example: RegExp('[')
    // url: https://eslint.org/docs/rules/no-invalid-regexp
    'no-invalid-regexp': OFF,

    // desc: Лишние операторы if внутри else
    /* example:
      if (condition) {
          // ...
      } else {
          if (anotherCondition) {
              // ...
          }
      }
    */
    // url: https://eslint.org/docs/rules/no-lonely-if
    'no-lonely-if': OFF,

    // desc: При смешивании операторов нужно обрамлять скобками
    // example: foo = a && b || c || d;  -> foo = (a && b) || c || d;
    // url: https://eslint.org/docs/rules/no-mixed-operators
    'no-mixed-operators': OFF,

    // desc: Нельзя создавать функции из конструктора
    // example: new Function("a", "b", "return a + b")
    // url: https://eslint.org/docs/rules/no-new-func
    'no-new-func': OFF,

    // desc: Запрет на пользование восьмеричной системы счисления
    // example: num = 071; // 57
    // url: https://eslint.org/docs/rules/no-octal
    'no-octal': OFF,

    // desc: Бесмысленные конкатенации
    // example: foo = "a" + "b"; -> foo = "ab";
    // url: https://eslint.org/docs/rules/no-useless-concat
    'no-useless-concat': OFF,

    // desc: Нельзя использовать with
    // example: with (...) {...}
    // url: https://eslint.org/docs/rules/no-with
    'no-with': OFF,

    // url: https://eslint.org/docs/rules/multiline-ternary
    'multiline-ternary': OFF,

    // url: https://eslint.org/docs/rules/getter-return
    'getter-return': OFF,

    // url: https://eslint.org/docs/rules/no-alert
    'no-alert': OFF,

    // url: https://eslint.org/docs/rules/dot-location
    'dot-location': OFF,

    // url: https://eslint.org/docs/rules/eol-last
    'eol-last': OFF,

    // url: https://eslint.org/docs/rules/no-confusing-arrow
    'no-confusing-arrow': OFF,

    // url: https://eslint.org/docs/rules/no-array-constructor
    'no-array-constructor': OFF,
    // url: https://eslint.org/docs/rules/no-new
    'no-new': OFF,

    // url: https://eslint.org/docs/rules/no-new-object
    'no-new-object': OFF,

    // url: https://eslint.org/docs/rules/default-case
    'default-case': OFF,

    // url: https://eslint.org/docs/rules/no-bitwise
    'no-bitwise': OFF,

    // url: https://eslint.org/docs/rules/radix
    'radix': OFF,

    // url: https://eslint.org/docs/rules/no-prototype-builtins
    'no-prototype-builtins': OFF,

    // url: https://eslint.org/docs/rules/no-useless-return
    'no-useless-return': OFF,

    // url: https://eslint.org/docs/rules/quote-props
    'quote-props': OFF,

    // url: https://eslint.org/docs/rules/no-unused-vars
    'no-unused-vars': OFF{
      // React или любая буква (для дженериков во флоу)
      varsIgnorePattern: 'React|^\\w$'
    }],

    // url: https://eslint.org/docs/rules/accessor-pairs
    'accessor-pairs': OFF,

    // url: https://eslint.org/docs/rules/array-bracket-newline
    'array-bracket-newline': OFF,

    // url: https://eslint.org/docs/rules/array-bracket-spacing
    'array-bracket-spacing': OFF,

    // url: https://eslint.org/docs/rules/array-callback-return
    'array-callback-return': OFF,

    // url: https://eslint.org/docs/rules/array-element-newline
    'array-element-newline': OFF,

    // url: https://eslint.org/docs/rules/block-scoped-var
    'block-scoped-var': OFF,

    // url: https://eslint.org/docs/rules/block-spacing
    'block-spacing': OFF,

    // url: https://eslint.org/docs/rules/callback-return
    'callback-return': OFF,

    // url: https://eslint.org/docs/rules/camelcase
    'camelcase': OFF,

    // url: https://eslint.org/docs/rules/capitalized-comments
    'capitalized-comments': OFF,

    // url: https://eslint.org/docs/rules/class-methods-use-this
    'class-methods-use-this': OFF,

    // url: https://eslint.org/docs/rules/comma-style
    'comma-style': OFF,

    // url: https://eslint.org/docs/rules/complexity
    'complexity': OFF,

    // url: https://eslint.org/docs/rules/consistent-return
    'consistent-return': OFF,

    // url: https://eslint.org/docs/rules/consistent-this
    'consistent-this': OFF,

    // url: https://eslint.org/docs/rules/constructor-super
    'constructor-super': OFF,

    // url: https://eslint.org/docs/rules/for-direction
    'for-direction': OFF,

    // url: https://eslint.org/docs/rules/func-name-matching
    'func-name-matching': OFF,

    // url: https://eslint.org/docs/rules/func-names
    'func-names': OFF,

    // url: https://eslint.org/docs/rules/func-style
    'func-style': OFF,

    // url: https://eslint.org/docs/rules/global-require
    'global-require': OFF,

    // url: https://eslint.org/docs/rules/guard-for-in
    'guard-for-in': OFF,

    // url: https://eslint.org/docs/rules/handle-callback-err
    'handle-callback-err': OFF,

    // url: https://eslint.org/docs/rules/id-blacklist
    'id-blacklist': OFF,

    // url: https://eslint.org/docs/rules/id-length
    'id-length': OFF,

    // url: https://eslint.org/docs/rules/id-match
    'id-match': OFF,

    // url: https://eslint.org/docs/rules/implicit-arrow-linebreak
    'implicit-arrow-linebreak': OFF,

    // url: https://eslint.org/docs/rules/line-comment-position
    'line-comment-position': OFF,

    // url: https://eslint.org/docs/rules/linebreak-style
    'linebreak-style': OFF,

    // url: https://eslint.org/docs/rules/lines-around-comment
    'lines-around-comment': OFF,

    // url: https://eslint.org/docs/rules/max-classes-per-file
    'max-classes-per-file': OFF,

    // url: https://eslint.org/docs/rules/max-depth
    'max-depth': OFF,

    // url: https://eslint.org/docs/rules/max-lines-per-function
    'max-lines-per-function': OFF,

    // url: https://eslint.org/docs/rules/max-lines
    'max-lines': OFF,

    // url: https://eslint.org/docs/rules/max-nested-callbacks
    'max-nested-callbacks': OFF,

    // url: https://eslint.org/docs/rules/max-params
    'max-params': OFF,

    // url: https://eslint.org/docs/rules/max-statements-per-line
    'max-statements-per-line': OFF,

    // url: https://eslint.org/docs/rules/max-statements
    'max-statements': OFF,

    // url: https://eslint.org/docs/rules/multiline-comment-style
    'multiline-comment-style': OFF,

    // url: https://eslint.org/docs/rules/new-cap
    'new-cap': OFF,

    // url: https://eslint.org/docs/rules/newline-per-chained-call
    'newline-per-chained-call': OFF,

    // url: https://eslint.org/docs/rules/no-async-promise-executor
    'no-async-promise-executor': OFF,

    // url: https://eslint.org/docs/rules/no-await-in-loop
    'no-await-in-loop': OFF,

    // url: https://eslint.org/docs/rules/no-buffer-constructor
    'no-buffer-constructor': OFF,

    // url: https://eslint.org/docs/rules/no-caller
    'no-caller': OFF,

    // url: https://eslint.org/docs/rules/no-case-declarations
    'no-case-declarations': OFF,

    // url: https://eslint.org/docs/rules/no-class-assign
    'no-class-assign': OFF,

    // url: https://eslint.org/docs/rules/no-compare-neg-zero
    'no-compare-neg-zero': OFF,

    // url: https://eslint.org/docs/rules/no-cond-assign
    'no-cond-assign': OFF,

    // url: https://eslint.org/docs/rules/no-console
    'no-console': OFF,

    // url: https://eslint.org/docs/rules/no-const-assign
    'no-const-assign': OFF,

    // url: https://eslint.org/docs/rules/no-constant-condition
    'no-constant-condition': OFF,

    // url: https://eslint.org/docs/rules/no-continue
    'no-continue': OFF,

    // url: https://eslint.org/docs/rules/no-control-regex
    'no-control-regex': OFF,

    // url: https://eslint.org/docs/rules/no-debugger
    'no-debugger': OFF,

    // url: https://eslint.org/docs/rules/no-div-regex
    'no-div-regex': OFF,

    // url: https://eslint.org/docs/rules/no-else-return
    'no-else-return': OFF,

    // url: https://eslint.org/docs/rules/no-empty-character-class
    'no-empty-character-class': OFF,

    // url: https://eslint.org/docs/rules/no-empty-function
    'no-empty-function': OFF,

    // url: https://eslint.org/docs/rules/no-empty-pattern
    'no-empty-pattern': OFF,

    // url: https://eslint.org/docs/rules/no-empty
    'no-empty': OFF,

    // url: https://eslint.org/docs/rules/no-eq-null
    'no-eq-null': OFF,

    // url: https://eslint.org/docs/rules/no-eval
    'no-eval': OFF,

    // url: https://eslint.org/docs/rules/no-extend-native
    'no-extend-native': OFF,

    // url: https://eslint.org/docs/rules/no-extra-bind
    'no-extra-bind': OFF,

    // url: https://eslint.org/docs/rules/no-extra-label
    'no-extra-label': OFF,

    // url: https://eslint.org/docs/rules/no-extra-parens
    'no-extra-parens': OFF,

    // url: https://eslint.org/docs/rules/no-fallthrough
    'no-fallthrough': OFF,

    // url: https://eslint.org/docs/rules/no-global-assign
    'no-global-assign': OFF,

    // url: https://eslint.org/docs/rules/no-implicit-coercion
    'no-implicit-coercion': OFF,

    // url: https://eslint.org/docs/rules/no-implicit-globals
    'no-implicit-globals': OFF,

    // url: https://eslint.org/docs/rules/no-implied-eval
    'no-implied-eval': OFF,

    // url: https://eslint.org/docs/rules/no-inline-comments
    'no-inline-comments': OFF,

    // url: https://eslint.org/docs/rules/no-inner-declarations
    'no-inner-declarations': OFF,

    // url: https://eslint.org/docs/rules/no-invalid-this
    'no-invalid-this': OFF,

    // url: https://eslint.org/docs/rules/no-irregular-whitespace
    'no-irregular-whitespace': OFF,

    // url: https://eslint.org/docs/rules/no-iterator
    'no-iterator': OFF,

    // url: https://eslint.org/docs/rules/no-label-var
    'no-label-var': OFF,

    // url: https://eslint.org/docs/rules/no-labels
    'no-labels': OFF,

    // url: https://eslint.org/docs/rules/no-lone-blocks
    'no-lone-blocks': OFF,

    // url: https://eslint.org/docs/rules/no-loop-func
    'no-loop-func': OFF,

    // url: https://eslint.org/docs/rules/no-magic-numbers
    'no-magic-numbers': OFF,

    // url: https://eslint.org/docs/rules/no-misleading-character-class
    'no-misleading-character-class': OFF,

    // url: https://eslint.org/docs/rules/no-mixed-requires
    'no-mixed-requires': OFF,

    // url: https://eslint.org/docs/rules/no-mixed-spaces-and-tabs
    'no-mixed-spaces-and-tabs': OFF,

    // url: https://eslint.org/docs/rules/no-multi-assign
    'no-multi-assign': OFF,

    // url: https://eslint.org/docs/rules/no-multi-str
    'no-multi-str': OFF,

    // url: https://eslint.org/docs/rules/no-negated-condition
    'no-negated-condition': OFF,

    // url: https://eslint.org/docs/rules/no-nested-ternary
    'no-nested-ternary': OFF,

    // url: https://eslint.org/docs/rules/no-new-require
    'no-new-require': OFF,

    // url: https://eslint.org/docs/rules/no-new-symbol
    'no-new-symbol': OFF,

    // url: https://eslint.org/docs/rules/no-new-wrappers
    'no-new-wrappers': OFF,

    // url: https://eslint.org/docs/rules/no-obj-calls
    'no-obj-calls': OFF,

    // url: https://eslint.org/docs/rules/no-octal-escape
    'no-octal-escape': OFF,

    // url: https://eslint.org/docs/rules/no-param-reassign
    'no-param-reassign': OFF,

    // url: https://eslint.org/docs/rules/no-path-concat
    'no-path-concat': OFF,

    // url: https://eslint.org/docs/rules/no-plusplus
    'no-plusplus': OFF,

    // url: https://eslint.org/docs/rules/no-process-env
    'no-process-env': OFF,

    // url: https://eslint.org/docs/rules/no-process-exit
    'no-process-exit': OFF,

    // url: https://eslint.org/docs/rules/no-proto
    'no-proto': OFF,

    // url: https://eslint.org/docs/rules/no-redeclare
    'no-redeclare': OFF,

    // url: https://eslint.org/docs/rules/no-regex-spaces
    'no-regex-spaces': OFF,

    // url: https://eslint.org/docs/rules/no-restricted-globals
    'no-restricted-globals': OFF,

    // url: https://eslint.org/docs/rules/no-restricted-imports
    'no-restricted-imports': OFF,

    // url: https://eslint.org/docs/rules/no-restricted-modules
    'no-restricted-modules': OFF,

    // url: https://eslint.org/docs/rules/no-restricted-properties
    'no-restricted-properties': OFF,

    // url: https://eslint.org/docs/rules/no-restricted-syntax
    'no-restricted-syntax': OFF,

    // url: https://eslint.org/docs/rules/no-return-assign
    'no-return-assign': OFF,

    // url: https://eslint.org/docs/rules/no-return-await
    'no-return-await': OFF,

    // url: https://eslint.org/docs/rules/no-script-url
    'no-script-url': OFF,

    // url: https://eslint.org/docs/rules/no-self-assign
    'no-self-assign': OFF,

    // url: https://eslint.org/docs/rules/no-self-compare
    'no-self-compare': OFF,

    // url: https://eslint.org/docs/rules/no-sequences
    'no-sequences': OFF,

    // url: https://eslint.org/docs/rules/no-shadow-restricted-names
    'no-shadow-restricted-names': OFF,

    // url: https://eslint.org/docs/rules/no-shadow
    'no-shadow': OFF,

    // url: https://eslint.org/docs/rules/no-sparse-arrays
    'no-sparse-arrays': OFF,

    // url: https://eslint.org/docs/rules/no-sync
    'no-sync': OFF,

    // url: https://eslint.org/docs/rules/no-tabs
    'no-tabs': OFF,

    // url: https://eslint.org/docs/rules/no-template-curly-in-string
    'no-template-curly-in-string': OFF,

    // url: https://eslint.org/docs/rules/no-ternary
    'no-ternary': OFF,

    // url: https://eslint.org/docs/rules/no-this-before-super
    'no-this-before-super': OFF,

    // url: https://eslint.org/docs/rules/no-throw-literal
    'no-throw-literal': OFF,

    // url: https://eslint.org/docs/rules/no-undef-init
    'no-undef-init': OFF,

    // url: https://eslint.org/docs/rules/no-undef
    'no-undef': OFF,

    // url: https://eslint.org/docs/rules/no-undefined
    'no-undefined': OFF,

    // url: https://eslint.org/docs/rules/no-underscore-dangle
    'no-underscore-dangle': OFF,

    // url: https://eslint.org/docs/rules/no-unexpected-multiline
    'no-unexpected-multiline': OFF,

    // url: https://eslint.org/docs/rules/no-unmodified-loop-condition
    'no-unmodified-loop-condition': OFF,

    // url: https://eslint.org/docs/rules/no-unneeded-ternary
    'no-unneeded-ternary': OFF,

    // url: https://eslint.org/docs/rules/no-unreachable
    'no-unreachable': OFF,

    // url: https://eslint.org/docs/rules/no-unsafe-finally
    'no-unsafe-finally': OFF,

    // url: https://eslint.org/docs/rules/no-unsafe-negation
    'no-unsafe-negation': OFF,

    // url: https://eslint.org/docs/rules/no-unused-expressions
    'no-unused-expressions': OFF,

    // url: https://eslint.org/docs/rules/no-unused-labels
    'no-unused-labels': OFF,

    // url: https://eslint.org/docs/rules/no-useless-call
    'no-useless-call': OFF,

    // url: https://eslint.org/docs/rules/no-useless-computed-key
    'no-useless-computed-key': OFF,

    // url: https://eslint.org/docs/rules/no-useless-constructor
    'no-useless-constructor': OFF,

    // url: https://eslint.org/docs/rules/no-useless-escape
    'no-useless-escape': OFF,

    // url: https://eslint.org/docs/rules/no-useless-rename
    'no-useless-rename': OFF,

    // url: https://eslint.org/docs/rules/no-void
    'no-void': OFF,

    // url: https://eslint.org/docs/rules/no-warning-comments
    'no-warning-comments': OFF,

    // url: https://eslint.org/docs/rules/nonblock-statement-body-position
    'nonblock-statement-body-position': OFF,

    // url: https://eslint.org/docs/rules/object-property-newline
    'object-property-newline': OFF,

    // url: https://eslint.org/docs/rules/operator-assignment
    'operator-assignment': OFF,

    // url: https://eslint.org/docs/rules/prefer-arrow-callback
    'prefer-arrow-callback': OFF,

    // url: https://eslint.org/docs/rules/prefer-destructuring
    'prefer-destructuring': OFF,

    // url: https://eslint.org/docs/rules/prefer-numeric-literals
    'prefer-numeric-literals': OFF,

    // url: https://eslint.org/docs/rules/prefer-object-spread
    'prefer-object-spread': OFF,

    // url: https://eslint.org/docs/rules/prefer-promise-reject-errors
    'prefer-promise-reject-errors': OFF,

    // url: https://eslint.org/docs/rules/prefer-rest-params
    'prefer-rest-params': OFF,

    // url: https://eslint.org/docs/rules/prefer-spread
    'prefer-spread': OFF,

    // url: https://eslint.org/docs/rules/require-atomic-updates
    'require-atomic-updates': OFF,

    // url: https://eslint.org/docs/rules/require-await
    'require-await': OFF,

    // url: https://eslint.org/docs/rules/require-jsdoc
    // status: deprecated
    'require-jsdoc': OFF,

    // url: https://eslint.org/docs/rules/require-unicode-regexp
    'require-unicode-regexp': OFF,

    // url: https://eslint.org/docs/rules/require-yield
    'require-yield': OFF,

    // url: https://eslint.org/docs/rules/semi-spacing
    'semi-spacing': OFF,

    // url: https://eslint.org/docs/rules/semi-style
    'semi-style': OFF,

    // url: https://eslint.org/docs/rules/sort-imports
    'sort-imports': OFF,

    // url: https://eslint.org/docs/rules/sort-keys
    'sort-keys': OFF,

    // url: https://eslint.org/docs/rules/sort-vars
    'sort-vars': OFF,

    // url: https://eslint.org/docs/rules/space-before-blocks
    'space-before-blocks': OFF,

    // url: https://eslint.org/docs/rules/space-before-function-paren
    'space-before-function-paren': OFF,

    // url: https://eslint.org/docs/rules/space-in-parens
    'space-in-parens': OFF,

    // url: https://eslint.org/docs/rules/spaced-comment
    'spaced-comment': OFF,

    // url: https://eslint.org/docs/rules/strict
    'strict': OFF,

    // url: https://eslint.org/docs/rules/switch-colon-spacing
    'switch-colon-spacing': OFF,

    // url: https://eslint.org/docs/rules/symbol-description
    'symbol-description': OFF,

    // url: https://eslint.org/docs/rules/template-tag-spacing
    'template-tag-spacing': OFF,

    // url: https://eslint.org/docs/rules/unicode-bom
    'unicode-bom': OFF,

    // url: https://eslint.org/docs/rules/use-isnan
    'use-isnan': OFF,

    // url: https://eslint.org/docs/rules/valid-jsdoc
    // status: deprecated
    'valid-jsdoc': OFF,

    // url: https://eslint.org/docs/rules/valid-typeof
    'valid-typeof': OFF,

    // url: https://eslint.org/docs/rules/vars-on-top
    'vars-on-top': OFF,

    // url: https://eslint.org/docs/rules/wrap-iife
    'wrap-iife': OFF,

    // url: https://eslint.org/docs/rules/wrap-regex
    'wrap-regex': OFF,

    // url: https://eslint.org/docs/rules/yoda
    'yoda': OFF,

    // url: https://eslint.org/docs/rules/no-useless-catch
    'no-useless-catch': OFF,

    // url: https://eslint.org/docs/rules/prefer-named-capture-group
    'prefer-named-capture-group': OFF
  },
};
