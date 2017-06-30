# creater

[English](https://github.com/liujians/creater/blob/master/README-en.md)

## 介绍

creater 是一个用来定制化创建一个或一组文件

**很多时候、创建文件需要默认内容、比如vue的默认结构、react的默认引入、**

**为了创建文件直接有内容而不是复制粘贴、这种时候、就可以用到creater、来定制化创建**

也可以一次性创建多个同名文件且不同后缀的文件、一行命令即可使用

根据参数、你可以根据配置一次性生成多个同名且不同后缀的文件、

在项目中避免重复的create file、

包括内容也可以通过模版来统一配置、防止无限的复制粘贴

模版可以随意修改（这样每一个文件加入作者信息就不需要复制粘贴了）

> npm install -g creater

![gif loading...](./creater-pre.gif)

## 快速开始

通过命令生成配置文件

> creater init

> takeTemplate?(Y/N)_ //输入Y开启模版功能、可以满足大部分定制化需求、具体的配置说明可以继续往下看

开始使用(执行):

> creater new hello

或者

> creater new hello.vue --simple

更多参数可以看[这里](#配置文件)

## 应用场景

例如你的结构是这样

	my-app
	  css
	    hello.css
	  js
	    hello.js
	  view
	    hello.html
	  utils
	  index.html
	  package.json
		
以hello为名的文件有三个、分布在三个不同的文件夹、只是后缀不一样、甚至可能每一个都有它独立的内容

这个时候creater可以大显身手、用来一次性创建这三个文件（当然根据配置也可以更多）、再根据自己的需求改造模版、把内部的默认代码一起生成了

比如index.html里面引入的公共js（jquery、bootstrap等）、写在模版里、就不需要每个生成的页面复制粘贴了

## 配置文件

|    参数     |     说明     | 备注／可选值 | 
|------------|-------------|-------------|
| type | type是生成多个文件的配置选项|内部多个属性则多个文件|
|type.xxx|type的属性名对应生成文件的后缀|唯一|
|type.xxx.url|生成文件放入的文件夹|view／tw|
|type.xxx.template|生成文件使用的模版(不设置此项则设置content)|template/index.html|
|type.xxx.content|生成文件写入的默认内容(如果配置了模版则不用设置此项)|//2017-06-20|
|simplepath|单文件生成模式路径|creater/simple|
|content|单文件生成模式内容|//created by creater \n//2017-06-20|

## 启动命令

生成配置文件（也可以自己写）
> creater init

可以查看使用new的帮助
> creater new -h 

单文件创建模式、路径取simplepath、内容取content

> creater new test.vue --simple

//注意、simple模式下创建文件需要加扩展名、多文件模式下会自动取后缀名所以不需要加