module.exports = {
  config: {
    path: './postcss.config.js'
  },
  extensions: ['.css'],
  minimize: true,
  inject: {
    insertAt: 'top'
  },
  extract: false,
    plugins: {
      'postcss-url': {
      url: 'rebase'
    },
      tailwindcss: {},
      autoprefixer: {},
    }
  };