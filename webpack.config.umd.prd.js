const { merge } = require('webpack-merge');
const common = require('./webpack.config.common')
const path = require('path')
const config = require('./package.json')

module.exports = merge(common, {
    mode: 'production',
    output: {
        library:{
            name:  "Unzipper",
            type: "umd",
        },
        filename: 'unzipper-' + config.version + '.umd.min.js',
        path: path.resolve(__dirname, 'dist'),
        globalObject: 'this'
    },
});