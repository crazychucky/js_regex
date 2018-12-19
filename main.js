// import D as D from "./IncludeData"
let IncludeData = require("./IncludeData")
let readDir = require("./readDir")

var result = new Array()
let includeData = new IncludeData()

function onLine(str){
  str = str.toString();

  includeData.check(str)
}

function onDone(){
  includeData.output()
}

var path = "./input"

readDir(path,"cpp",onLine,onDone)

