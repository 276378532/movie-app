module.exports = {
    devServer: {
        proxy : {
            '/api' : {
                target : 'htpp://39.97.33.178',
                changeOrigin : true
            }
        }
    }
}