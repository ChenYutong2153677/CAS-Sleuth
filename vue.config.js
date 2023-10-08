const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    publicPath: "./",
    transpileDependencies: true,
    devServer: {
        proxy: {
            '/api': {
                target: 'https://tongji-software-igem2023.com/api/virus/page?name=a&pageNum=1&pageSize=9',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },

})
