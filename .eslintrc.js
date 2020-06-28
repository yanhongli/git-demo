module.exports = {

    root: true,

    env: {

        browser: true

    },

    extends: [

        'plugin:vue/recommended',

        'standard'

    ],

    parserOptions: {

        parser: 'babel-eslint',

        sourceType: 'module'

    },

    globals: {

        '$': false,

        'BMap': false

    },

    plugins: ['vue', 'html'],

    rules: {

        // js

        'space-before-function-paren': 0, // 函数名与参数的空格

        'camelcase': 0, // 变量必须用驼峰法



        // vue

        'vue/no-use-v-if-with-v-for': 0,

        'vue/order-in-components': 0,

        'vue/require-prop-types': 0,

        'vue/no-v-html': 0,

        'vue/singleline-html-element-content-newline': 0,



    }

}