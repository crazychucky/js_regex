var fs = require('fs');
var sep = require('path').sep;
var readline = require('readline');

function filter(fileName,suffix) {
    let len = suffix.length
    let subStr = fileName.substring(fileName.length - len - 1)
    suffix = '.' + suffix
    return suffix == subStr
}

/* 读取文件*/
function readFile(fReadName, onLine,onDone) {
    var fRead = fs.createReadStream(fReadName);
    var objReadline = readline.createInterface({
        input: fRead
    });
    objReadline.on('line', function (line) {
        onLine(line);
    });
    objReadline.on('close', function () {
        if(onDone){
            onDone();
        }
    });
}

/**
 * 递归打印文件目录、文件名
 */
var readDir = function(path,suffix,onLine,onDone) {
    var exists = fs.existsSync(path),
        stat = fs.statSync(path);

    if (exists && stat) { //判断文件、文件目录是否存在
        if (stat.isFile()) {
            var fpath = path.split(sep);
            let name = fpath[fpath.length - 1]
            if(filter(name,suffix)){
                readFile(path, onLine, onDone)
            }
        } else if (stat.isDirectory()) {
            var fpath = path.split(sep);
            // console.log(fpath[fpath.length - 1])
            var files = fs.readdirSync(path);
            if (files && files.length > 0) {
                files.forEach(function(file) {
                    readDir(path + sep + file,suffix,onLine,onDone); //递归
                });
            }
        }
    } else {
        console.info('根目录不存在.');
    }
};

module.exports = readDir