const themeConfig = require('./config/theme/')

module.exports = {
    title: "JL_Guan",
    description: 'Enjoy when you can, and endure when you must.',
    dest: 'public',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ],
    base: '/blog/',
    theme: 'reco',
    themeConfig,
    markdown: {
        lineNumbers: true
    },
    plugins: [
        '@vuepress/medium-zoom',
        'flowchart',
        [
            "@vuepress-reco/vuepress-plugin-kan-ban-niang",
            {
                theme: ['wanko'],
                clean: true,
                modelStyle: {
                    position: "fixed",
                    left: "0px",
                    bottom: "0px",
                    opacity: "0.9",
                    zIndex: 99999
                }
            }
        ]
    ]
}  