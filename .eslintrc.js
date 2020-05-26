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
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:cypress/recommended'
    ],
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
        'react',
        'cypress'
    ],
    'rules': {
        'cypress/no-assigning-return-values': 'warn',
        'cypress/no-unnecessary-waiting': 'warn'
    },
    'settings': {
        'react': {
            'version': 'detect'
        }
    }
};