#!/usr/bin/env node

'use strict';
let main = require('../lib/main');
let pkg = require('../package.json')
let program = require('commander');
let color = require("colors");

program
    .version(pkg.version);//声明版本号

program
    .command('new')
    .usage('[filename] [option]')
    .description('create file with config'.bold.green)
    .option('-s, --single', 'create with single')
    .action(function(filename, option){
        if (typeof filename === 'object') {
            console.log('ERROR: please input filename！'.bold.red);
            this.outputHelp();
            return;
        }
        main.create(filename, option)
    }).on('--help', function () {
        console.log('  Examples:'.bold.green);
        console.log();
        console.log('  creater new'.bold.green);
        console.log('  creater new test'.bold.green);
        console.log();
    });

program
    .command('init')
    .action(main.init)

program.parse(process.argv);//开始解析用户输入的命令
