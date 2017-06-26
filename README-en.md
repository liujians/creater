# creater

[中文文档](./README.md)

## introduce

Creater is a used to create customized one or a set of files

According to the parameters, you can according to the configuration of disposable generate multiple files with the same name and different suffix,

Create a file in the project to avoid repetition

Include content can also be unified by the template configuration, to prevent infinite copy and paste

> npm install -g creater

![gif loading...](./creater-pre.gif)

## Quick start

Through the command to generate configuration files

> creater init

> takeTemplate?(Y/N)_ 

//Enter Y open template function, can satisfy most of the customization requirements, specific configuration instructions can continue to look down

Begin to use:

> creater new hello

or

> creater new hello.vue --simple

We can see more parameters to [here](#configuration file)

## Application scenarios

Such as your structure

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

There are three, in the name of the hello file distribution in three different folders, just different suffix, and possibly even each one has its independent content

The creater, used for one-off creation these three files (of course according to the configuration can also be more), and then according to their own requirements template, the internal transformation of the default code is generated

Such as the index. Inside the HTML into public js (jquery, the bootstrap, etc.), written in the template, do not need to each of the generated page copy and paste

## configuration file

|    parameter     |     instructions     | note／optional value | 
|------------|-------------|-------------|
| type | type is to generate multiple file configuration options|Internal multiple attributes are more files|
|type.xxx|The type of attribute names corresponding to generate file suffix|The only|
|type.xxx.url|To generate the file into the folder|view／tw|
|type.xxx.template|Use the template generated file|template/index.html|
|type.xxx.content|Generated file is written to the default content(If the configuration template, need not set this)|//2017-06-20|
|simplepath|Single file path generated mode|creater/simple|
|content|Single file mode|//created by creater \n//2017-06-20|

## Start the command

Generate configuration files
> creater init

Can use the help of the new view
> creater new -h

Single file creation mode, path take ` simplepath `, content to take ` content `

> creater new test.vue --simple