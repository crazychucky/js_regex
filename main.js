var fs = require('fs');
var readline = require('readline');


function readFileToArr(fReadName,callback){
  var fRead = fs.createReadStream(fReadName);
  var objReadline = readline.createInterface({
      input:fRead
  });
  objReadline.on('line',function (line) {
      callback(line);
      //console.log('line:'+ line);
  });
}

function cb(str){
  str = str.toString();

  var idx = str.search("include")
  if(idx > 0){
    var ret = str.match(/"(.+?)"/g);
    console.log(ret[0]);
    console.log(str);
  }
  // if(null!= ret){
  //   console.log(ret);
  // }
}

var file = "./input/sample.cpp"

readFileToArr(file,cb)
