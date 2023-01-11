const path = require('path');
const isDev = process.env.NODE_ENV === 'development'
const Mode = require('frontmatter-markdown-loader/mode')
const markdownIt = require('markdown-it');
const markdownItPrism = require('markdown-it-prism');

module.exports = {
    chainWebpack: config => {
        config.module
            .rule('markdown')
            .test(/\.md$/)
            .use('frontmatter-markdown-loader')
            .loader('frontmatter-markdown-loader')
            .tap(options => {
                return {
                    markdownIt: markdownIt({ html: true }).use(markdownItPrism),
                    mode: [Mode.HTML]
                }
            })
    },
    publicPath: isDev ? '' : './',
    outputDir: '../dist',
    lintOnSave: false,
    productionSourceMap: false,
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src/')
            }
        }
    }
}