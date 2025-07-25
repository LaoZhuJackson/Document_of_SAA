# 常见问题汇总
可以使用`站内搜索`或者`Ctrl`+`f`搜索本页内容

::: warning 提醒
如果本页没有你遇到的问题
* 去github上的[issue](https://github.com/LaoZhuJackson/SnowbreakAutoAssistant/issues)看看
* 去交流群里找琉璃对线
* 遇到了全新的问题→提一个[issue](https://github.com/LaoZhuJackson/SnowbreakAutoAssistant/issues)
  :::
## 无法访问尘白公告api，无法访问gitee获取坐标更新 <Badge type="tip" text="v2.0.3之前版本" />
![proxy_error.png](/issue/img/proxy_error.png)
::: tip 🤔回答
出现这个报错是因为你电脑开了代理而没有在SAA上设置代理端口导致SAA无法访问这两个网站

前往设置页面设置你的代理端口，重启SAA就能获取更新了
![proxy_setting.png](/issue/img/proxy_setting.png)
:::
## 刷体力时日志出现`WARNING - 'NoneType' object has no attribute 'split'`报错 <Badge type="tip" text="v2.0.5之前版本" />
![nonetype_error_power.png](/issue/img/nonetype_error_power.png)
::: tip 🤔回答
出现这个报错是因为SAA版本更新后用户旧版的config.json在新版不再适用

找到`SAA/AppData/config.json`并删除，重启SAA即可（会丢失你之前的设定，需要重新设置一次）
:::
## 鼠标移动正确，游戏出现点击特效，游戏窗口贴在左上角后点击还是没有生效 <Badge type="tip" text="所有版本" />
::: tip 🤔回答
如果你的电脑是16:9，不管你是1080P，2k还是4k，都尽量游戏设置`无边框全屏`，确保SAA的准确性

出现这个是因为你的屏幕不是16:9，某些屏幕还能靠SAA自动缩放到左上角解决问题

`带鱼屏`和`曲面屏`特别容易触发这个问题，之前我一直以为是无解的，但现在提供一个群友发现的解决办法

::: details `带鱼屏`和`曲面屏`设置方法
1. 打开NVIDIA控制面板
   ![screen_1.png](/issue/img/screen_1.png)
2. 如图更改分辨率，注意改的是`PC`中的分辨率，选择`2560*1440`或`1920*1080`应该都行，推荐`2560*1440`
   ![screen_2.png](/issue/img/screen_2.png)
3. 游戏内选择无边框全屏
   ![screen_3.png](/issue/img/screen_3.png)
4. 启动SAA
   ![screen_4.png](/issue/img/screen_4.png)
:::

## 验证战场单人增益“丢弃”不点击 <Badge type="tip" text="v2.0.5之前版本" />
::: tip 🤔回答
出现这个是因为换了ocr方法后识别速度变快导致点击“确认”按钮后还没等丢弃动画出现就进入了下一轮检测，导致点击了两次确认

将SAA升级到`v2.0.5`可以解决该问题
:::

## 心动水弹反复用手铐 <Badge type="tip" text="所有版本" />
::: tip 🤔回答
这是因为识别对方是否处于手铐状态这里用的图像特征匹配，在`分辨率较低`或者`窗口化游戏`使用的用户识别出错的概率比较高

如果你的屏幕是16:9，设置游戏`全屏无边框`，如果不是那就`手动使用`一下道具，SAA能继续往后执行
:::

## 执行ocr出错：onnxruntime.api.onnxruntime_pybindl1_state.Fail <Badge type="tip" text="所有版本" />
![ocr_error.jpg](/issue/img/ocr_error.jpg)
::: tip 🤔回答
这是因为SAA默认开启GPU调用，如果你是核显用户出现了这个报错

找到`SAA/AppData/config.json`，将里面的`"ocr_use_gpu": true,`改为`"ocr_use_gpu": false,`，然后重启SAA
:::

## 能不能一边开SAA一边打其他游戏
::: tip 🤔回答
`不需要鼠标的游戏可以，否则不行`

SAA实现了后台截图、后台按键模拟和后台鼠标模拟，但是SAA仍然`会和你抢鼠标`，因为尘白的点击要想生效就得把鼠标移动到点击位置附近，这不是脚本的锅，而是尘白的锅

同样的方法放在鸣嘲就可以全自动，因为鸣嘲的点击不会检测鼠标当前坐标位置

当然这同样有解决方案，就是比较麻烦：[远程本地多用户桌面1.3(一种不让电脑跟你抢键鼠的思路)](https://www.bilibili.com/opus/805995851989123075?from=search&spm_id_from=333.337.0.0)
:::