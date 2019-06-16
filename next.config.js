const withOffline = require('next-offline')

const nextConfig = {

    // generateInDevMode: true,
    // workboxOpts: {
    //     dontAutoRegisterSw: true,
    // },
}

module.exports = withOffline(nextConfig)