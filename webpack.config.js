const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
    simulation: "http://localhost:4201/remoteEntry.js",
  },

  shared: {
    ...shareAll({ singleton: false, strictVersion: true, requiredVersion: 'auto' }),
  },


});
