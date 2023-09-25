const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    publicPath: "./",
    transpileDependencies: true,
    devServer: {
        proxy: {
            '/api': {
                target: 'http://43.133.192.56:5555',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },

})
