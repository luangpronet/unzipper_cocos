const { merge } = require('webpack-merge');
const common = require('./webpack.config.common')
const path = require('path')
const config = require('./package.json')

module.exports = merge(common, {
    mode: 'development',
    output: {
        library:{
            name:  "Unzipper",
            type: "assign",
        },
        filename: 'unzipper-' + config.version + '.assign.min.js',
        path: path.resolve(__dirname, 'dist'),
        globalObject: 'this'
    },
});