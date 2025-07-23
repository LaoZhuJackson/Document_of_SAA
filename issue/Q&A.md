# 常见问题汇总
可以使用`站内搜索`或者`Ctrl`+`f`搜索本页内容

::: warning
如果本页没有你遇到的问题
* 去github上的[issue](https://github.com/LaoZhuJackson/SnowbreakAutoAssistant/issues)看看
* 去交流群里找琉璃对线
* 遇到了全新的问题→提一个[issue](https://github.com/LaoZhuJackson/SnowbreakAutoAssistant/issues)
  :::
## 无法访问尘白公告api，无法访问gitee获取坐标更新
![proxy_error.png](/issue/img/proxy_error.png)
::: tip
出现这个报错是因为你电脑开了代理而没有在SAA上设置代理端口导致SAA无法访问这两个网站

前往设置页面设置你的代理端口，重启SAA就能获取更新了
![proxy_setting.png](/issue/img/proxy_setting.png)
:::
## SAA刷体力时日志出现`WARNING - 'NoneType' object has no attribute 'split'`报错
![nonetype_error_power.png](/issue/img/nonetype_error_power.png)
::: tip
出现这个报错是因为SAA版本更新后用户旧版的config.json在新版不再适用

找到`SAA/AppData/config.json`并删除，重启SAA即可（会丢失你之前的设定，需要重新设置一次）
:::
## 鼠标移动正确，游戏出现点击特效，游戏窗口贴在左上角后点击还是没有生效
::: tip
出现这个是因为你的屏幕不是16:9，某些屏幕还能靠SAA自动缩放到左上角解决问题，但是`带鱼屏`和`曲面屏`特别容易触发这个问题，目前无解

如果你的电脑是16:9，不管你是1080P，2k还是4k，都尽量全屏使用确保SAA的准确性
:::
