import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SAA文档站",
  description: "更适合中国宝宝体质",
  lastUpdated: true,
  aside: true,
  cleanUrls: true,
  metaChunk: true,

  head: [
    [
      'link', {rel: 'icon',type: 'image/x-icon',href: '/logo.ico'}
    ],
  ],

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: "SAA 文档站",
      description: "更适合中国宝宝体质",

      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        lastUpdated: {
          text: '最后更新于',
          formatOptions: {
            dateStyle: 'short',
            timeStyle: 'short'
          }
        },

        nav: [
          { text: '主页', link: '/' },
          {
            text: '开始使用',
            items: [
              { text: '前置设置', link: '/feature/presetting' },
              { text: '日常收菜', link: '/feature/daily' },
              { text: '工具辅助', link: '/feature/tools' },
              { text: '实时触发器', link: '/feature/trigger' }
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
              { text: '常见问题', link: '/issue/Q&A' },
              { text: 'issue规范', link: '/issue/issue-template' }
            ]
          }
        ],

        sidebar: [
          {
            text: '简介',
            collapsed: false,
            items: [
              { text: '什么是SAA', link: '/what_is_saa' },
              { text: '社区', link: '/community' }
            ]
          },
          {
            text: '开始使用',
            collapsed: false,
            items: [
              { text: '前置设置', link: '/feature/presetting' },
              { text: '日常收菜', link: '/feature/daily' },
              { text: '工具辅助', link: '/feature/tools' },
              { text: '实时触发器', link: '/feature/trigger' }
            ]
          },
          {
            text: '开发文档',
            collapsed: false,
            items: [
              { text: '本地运行', link: '/developer/local' },
              { text: '模块开发', link: '/developer/developer' }
            ]
          },
          {
            text: '问题汇总',
            collapsed: false,
            items: [
              { text: '常见问题', link: '/issue/Q&A' },
              { text: 'issue规范', link: '/issue/issue-template' }
            ]
          }
        ],

        logo: { src: '/logo.png', width: 24, height: 24 },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/LaoZhuJackson/SnowbreakAutoAssistant' }
        ],
        editLink: {
          pattern: 'https://github.com/LaoZhuJackson/Document_of_SAA/edit/main/:path',
          text: '在 GitHub 上编辑此页'
        },
        // 页脚
        // footer: {
        //   message: '基于 MIT 许可发布',
        //   copyright: 'SAA'
        // }
      }
    }
  },

  themeConfig: {
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    notFound: {
      title: '页面未找到',
      quote:
          '但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。',
      linkLabel: '前往首页',
      linkText: '带我回首页'
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容',

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    }
  }
})
