// import D as D from "./IncludeData"
var fs = require('fs');
var readline = require('readline');

var IncludeData = require("./IncludeData")
console.log(IncludeData)



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
let includeData = new IncludeData()

function cb(str){
  str = str.toString();

  includeData.check(str)
  var idx = str.search("include")
  if(idx > 0){
    // let ret = str.match(/"(.+?)"/g);
    console.log(str)
    // let ret = str.match(?<=").*?(?=B));
    let ret = str.match(/"(.+?)"/);
    // console.log(ret)
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

includeData.output()

// output()
