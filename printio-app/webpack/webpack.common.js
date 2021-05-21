const paths = require('./paths')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    // Where webpack looks to start building the bundle
    entry: [paths.src + '/index.tsx'],

    // Where webpack outputs the assets and bundles
    output: {
        path: paths.build,
        filename: '[name].bundle.js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        enforceExtension: false,
        modules: [paths.src, 'node_modules'],
        plugins: [new TsconfigPathsPlugin()]
    },
    devtool: 'inline-source-map',
    // Customize the webpack build process
    plugins: [
        // Removes/cleans build folders and unused assets when rebuilding
        new CleanWebpackPlugin(),

        // Copies files from target to destination folder
        new CopyWebpackPlugin({
            patterns: [{
                    from: paths.public,
                    to: 'assets',
                    globOptions: {
                        ignore: ['*.DS_Store'],
                    },
                },
                {
                    from: paths.src + '/assets',
                    to: 'assets',
                    globOptions: {
                        ignore: ['*.DS_Store'],
                    },
                },
                
                {
                    from: paths.src + '/web.config',
                    to: paths.build
                },
                {
                    from: paths.public + '/manifest.json',
                    to: paths.build
                },
                {
                    from: paths.public + '/service-worker.js',
                    to: paths.build
                }
            ],
        }),

        // Generates an HTML file from a template
        // Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            favicon: paths.public + '/favicon.ico',
            template: paths.public + "/index.html",
            PUBLIC_URL: paths.public // can modify `static` to another name or get it from `process`
        }),
    ],

    // Determine how modules within the project are treated
    module: {
        rules: [
            // Typescrip loader
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            },
            // JavaScript: Use Babel to transpile JavaScript files
            {
                test: [
                    /\.(js|jsx)$/,
                    /\.css$/,
                    /\.bmp$/,
                    /\.gif$/,
                    /\.jpe?g$/,
                    /\.png$/,
                ],
                exclude: /node_modules/,
                use: ['babel-loader']
            },

            // Styles: Inject CSS into the head with source maps
            {
                test: /\.(scss|css)$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { sourceMap: true, importLoaders: 1 } },
                    { loader: 'postcss-loader', options: { sourceMap: true } },
                    { loader: 'sass-loader', options: { sourceMap: true } },
                ],
            },
            // Images: Copy image files to build folder
            { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },

            // Fonts and SVGs: Inline files
            { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
        ],
    },
}