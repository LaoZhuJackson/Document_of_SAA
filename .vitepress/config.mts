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
          { text: '社区', link: '/community' }
        ]
      },
      {
        text: '功能介绍',
        items: [
          { text: '日常活动', link: '/feature/daily' },
          { text: '游戏辅助', link: '/feature/tools' },
          { text: '按键工具', link: '/feature/trigger' }
        ]
      },
      {
        text: '开发文档',
        items: [
          { text: '本地运行', link: '/developer/local' },
          { text: '模块开发', link: '/developer/developer' }
        ]
      },
      {
        text: '问题汇总',
        items: [
          { text: '常见Q&A', link: '/issue/Q&A' },
          { text: 'issue规范', link: '/issue/issue-template' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/LaoZhuJackson/SnowbreakAutoAssistant' }
    ]
  }
})
