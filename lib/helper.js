var fs = require('fs');
var path = require('path')
var makeDir = require('make-dir');
var config = require('./config');

var helper = module.exports = {};

require('shelljs/global');
/**
 * 写文件
 * @param  {[type]} filepath  [description]
 * @param  {[type]} content   [description]
 * @return {[type]}           [description]
 */
helper.writeFile = function(filepath, content) {
    helper.mkdir(filepath).then(function(){
        return fs.writeFileSync(filepath, content);
    });
}
helper.readFile = function(path) {
    return fs.readFileSync(path, 'utf8').toString();
},
helper.mkdir = function(filepath) {
    return makeDir(path.dirname(filepath));
}
helper.copy = function(type){
    if(type == 'y'){
        var pt = path.join(config.rootPath,"lib/creater.json")
        cp('-R',pt,process.cwd())
        var template = path.join(config.rootPath,"lib/template/")
        cp('-R',template,process.cwd())
    }else{
        var pt = path.join(config.rootPath,"lib/simple/creater.json")
        cp('-R',pt,process.cwd())
    }
	
}