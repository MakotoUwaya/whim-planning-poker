module.exports = {
  devServer: {
    host: process.env.HOST || "localhost",
  },
  configureWebpack: {
    resolve: {
      symlinks: false,
    },
  },
  transpileDependencies: ["vuetify"],
  publicPath: '/whim-planning-poker',
  outputDir: "docs",
  filenameHashing: false,
  productionSourceMap: false,
};
