module.exports = require('@backstage/cli/config/eslint-factory')(__dirname, {
    plugins: [
        '@stylistic'
    ],
    rules: {
        'eol-last': 'error',
        '@stylistic/no-tabs': 'error',
        '@stylistic/indent': ['error', 2]
    }
});
