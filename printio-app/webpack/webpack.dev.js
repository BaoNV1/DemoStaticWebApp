const paths = require('./paths')

const webpack = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
    // Set the mode to development or production
    mode: 'development',

    // Control how source maps are generated
    devtool: 'inline-source-map',

    // Spin up a server for quick development
    devServer: {
        host: '192.168.3.70',
        disableHostCheck: true,
        historyApiFallback: true,
        contentBase: paths.build,
        open: true,
        compress: true,
        hot: true,
        port: 7000,
        allowedHosts: [
            'domain.local',
            'design.domain.local',
            'localhost',
            'design.localhost',
        ]
    },

    plugins: [
        // Only update what has changed on hot reload
        new webpack.HotModuleReplacementPlugin(),
        new webpack.EnvironmentPlugin(['NODE_ENV', 'REACT_APP_ENV', 'TYPE']),
    ],
})