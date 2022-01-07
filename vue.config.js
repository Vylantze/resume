// vue.config.js
module.exports = {
  // options...
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.js',
      title: 'Darryl\'s Resume',
    },
  },
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