// vue.config.js
module.exports = {
  // options...
  publicPath: '/resume/',
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        productName: 'Darryl\'s Resume',
        win: {
          icon: './public/favicon.ico'
        }
      }
    }
  }
};