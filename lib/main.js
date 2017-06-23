'use strict';
let path = require("path")
let helper = require("./helper")
let color = require("colors");
var read = require("read")

let creater = module.exports = {
    create: (filename, option) => {
        let curRoot = process.cwd();
        const cfg = require(path.join(curRoot,'creater.json'))
        if(option.single){
            let mypath = path.join(curRoot,cfg.simplepath,filename)
            if(cfg.simpleTemplate!==''){
                let templateUrl = path.join(curRoot,cfg.simpleTemplate)
                helper.writeFile(mypath,helper.readFile(templateUrl))
            }else{
                helper.writeFile(mypath,cfg.content)
            }
        }else{
            let type = cfg.type
            for (let i in type) {
                let mypath = path.join(curRoot,type[i].url,filename+"."+i)
                if (type[i].template) {
                    let templateUrl = path.join(curRoot,type[i].template)
                    helper.writeFile(mypath,helper.readFile(templateUrl))
                } else if (type[i].content) {
                    helper.writeFile(mypath,type[i].content)
                } else {
                    console.log('ERROR: content or template select at least one'.bold.red);
                    this.outputHelp();
                    return;
                } 
            }
            console.log('successfully!'.bold.green)
        }
    },
    init: () => {
        var select = {
            prompt: 'takeTemplate?(Y/N)'.bold.green,
        }
        read(select,function(err, value){
            if (err) {
                return console.log('\nERROR: '.bold.red + 'take "' + prompt.name + '" err');
            }
            // 此处应该先删除再copy
            helper.copy(value.toLowerCase())
            helper.copy(value.toLowerCase())
        })
        
    }
}