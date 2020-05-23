module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production' ? '/enrich-brain-scoreboard/' : '/',
  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false,
    },
  },
  transpileDependencies: ['quasar'],
};
