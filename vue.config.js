const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: "./",
  transpileDependencies: true,
  devServer: {
    host: '0.0.0.0',
    port: 8080,
  }
})
