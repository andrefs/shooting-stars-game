
module.exports = {
  devServer: {
    port: 15112,
    // open: true
  },
  pwa: {
    name: 'Shooting Stars'
  },
  configureWebpack: {
    // No need for splitting
    optimization: {
      splitChunks: false
    }
  }
};
