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

var result = new Array()

function cb(str){
  str = str.toString();

  var idx = str.search("include")
  if(idx > 0){
    // let ret = str.match(/"(.+?)"/g);
    let ret = str.match(/"(.+?)"/);
    console.log(ret)
    ret.forEach(function(item,index,arr){
      result.push(item)
      // console.log(item)
    })
  }
  // if(null!= ret){
  //   console.log(ret);
  // }
}

function output(){
  result.forEach(function(item,index,arr){
    console.log(item)
  })
}

var file = "./input/sample.cpp"

readFileToArr(file,cb)

output()
