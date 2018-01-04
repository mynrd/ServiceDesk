const path = require('path'),
    webpack = require('webpack');

const WebpackNotifierPlugin = require('webpack-notifier'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin');

const applicationFolderName = 'ClientApp';
const applicationSource = path.join(__dirname, applicationFolderName);
const applicationDest = path.join(__dirname, 'wwwroot');
const nodeModules = path.join(__dirname, 'node_modules');

module.exports = {
    entry: {
        'Vendors': path.join(applicationSource, 'Vendors.ts'),
        'Application': path.join(applicationSource, 'Startup.ts')
    },
    output: {
        path: applicationDest,
        filename: applicationFolderName + '/[name].bundle.js',
        chunkFilename: applicationFolderName + '/Modules/[name]/[name].bundle.js',
        publicPath: '/'
    },
    resolve: {
        modules: [applicationSource, 'node_modules'],
        extensions: ['.ts', '.js', '.json', '.css', '.html', '*']
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html.tmpl',
            excludeChunks: ['Vendors'],
            minify: {
                collapseWhitespace: true, collapseInlineTagWhitespace: true, removeRedundantAttributes: true,
                removeEmptyAttributes: true, removeScriptTypeAttributes: true, removeStyleLinkTypeAttributes: true
            },
        }),
        new webpack.optimize.CommonsChunkPlugin("Common"),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader"
            }
        ]
    }
};