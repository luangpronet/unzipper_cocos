const path = require('path')
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
    },
    output: {
        library: "Unzipper",
        libraryTarget: "umd",
        filename: 'unzipper-0.10.0.umd.min.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        globalObject: 'this'
    },
    plugins: [
        // new nodePolyFill()
	],
    optimization: {
        minimize: false
    }
};