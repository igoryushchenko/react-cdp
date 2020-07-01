module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'node': true,
        'commonjs': true,
        'jest': true,
        'cypress/globals': true
    },
    'extends': [
        'airbnb-base',
        'plugin:react/recommended',
        'plugin:cypress/recommended',
        'plugin:flowtype/recommended'
    ],
    'parser': 'babel-eslint',
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'plugins': [
        'flowtype',
        'react',
        'cypress'
    ],
    'rules': {
        'cypress/no-assigning-return-values': 'warn',
        'cypress/no-unnecessary-waiting': 'warn',
        'camelcase': 'warn'
    },
    'settings': {
        'react': {
            'version': 'detect'
        }
    }
};