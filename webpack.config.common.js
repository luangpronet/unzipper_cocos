// const nodePolyFill = require('node-polyfill-webpack-plugin');

module.exports = {
    entry: './lib/index.js',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        fallback: {
            // fs: require.resolve('browserify-fs')
            // path: require.resolve("path-browserify"),
            stream: require.resolve("stream-browserify"),
            // constants: require.resolve("constants-browserify"),
            // zlib: require.resolve("browserify-zlib") 
        }
    }
    // plugins: [
    //     new nodePolyFill()
	// ]
};