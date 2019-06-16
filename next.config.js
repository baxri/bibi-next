const withOffline = require('next-offline')
const CopyWebpackPlugin = require('copy-webpack-plugin');

const nextConfig = {

    generateInDevMode: true,
    // dontAutoRegisterSw: true,

    workboxOpts: {
        importScripts: ['/sw-push-listener.js']
    },

    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Note: we provide webpack above so you should not `require` it
        // Perform customizations to webpack config
        // Important: return the modified config

        // Example using webpack option
        // config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));
        config.plugins.push(new CopyWebpackPlugin(['./sw-push-listener.js']));
        return config;
    },
}


module.exports = withOffline(nextConfig)