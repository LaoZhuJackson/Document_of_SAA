import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SAA文档站",
  description: "更适合中国宝宝体质",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    search: {
      provider: "local",
    },

    sidebar: [
      {
        text: '简介',
        items: [
          { text: '什么是SAA', link: '/what_is_saa' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/LaoZhuJackson/SnowbreakAutoAssistant' }
    ]
  }
})
