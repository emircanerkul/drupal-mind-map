const path = require('path');
const isDev = process.env.NODE_ENV === 'development'
const Mode = require('frontmatter-markdown-loader/mode')
const markdownIt = require('markdown-it');
const markdownItPrism = require('markdown-it-prism');
const lazy_loading = require('markdown-it-image-lazy-loading');
const mila = require("markdown-it-link-attributes");

module.exports = {
    chainWebpack: config => {
        config.module
            .rule('markdown')
            .test(/\.md$/)
            .use('frontmatter-markdown-loader')
            .loader('frontmatter-markdown-loader')
            .tap(options => {
                return {
                    markdownIt: markdownIt({ html: true, linkify: true })
                        .use(mila, {
                            attrs: {
                                target: "_blank",
                                rel: "noopener",
                            },
                        })
                        .use(lazy_loading)
                        .use(markdownItPrism),
                    mode: [Mode.HTML]
                }
            })
    },
    publicPath: isDev ? '' : './',
    outputDir: '../docs',
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