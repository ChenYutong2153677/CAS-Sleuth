const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    publicPath: "./",
    transpileDependencies: true,
    devServer: {
        proxy: {
            '/api': {
                target: 'https://tongji-software-igem2023.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },

})
