# 构建项目
## 安装miniconda
既然你选择了代码运行，那你大概率绕不开conda，如果你本地已经有了conda/miniconda，则可以直接看下面的步骤创建环境即可。如果你还不知道什么miniconda，网上有很多详细的教程，这里不做详细介绍，可以参考这篇教程进行安装：[Miniconda 安装及使用for windows（保姆级教程）](https://blog.csdn.net/ming12131342/article/details/140233867)
## 下载并安装依赖
1. 通过git下载项目
```
git clone https://github.com/LaoZhuJackson/SnowbreakAutoAssistant.git
```
2. 使用conda创建虚拟环境
```
cd SnowbreakAutoAssistant
conda create -n saa python=3.10  # 创建名为 `saa` 的虚拟环境
```
3. 激活虚拟环境
```
conda activate saa
```
4. 检查环境是否创建完成
```
python --version
```
5. 安装依赖
```
pip install -r requirements.txt
```
6. 尝试启动项目
在对应IDE中运行`main.py`查看是否正常运行
