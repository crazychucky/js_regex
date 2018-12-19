//定义类
class IncludeData {
  constructor() {
    this._list = new Array
  }

  check(str){
    str = str.toString();
    let idx = str.search("include")
    if(idx > 0){
      let result = str.match(/"(.+?)"/);
      this._list.push(result[0])
      return true
    }
    return false
  }

  output(){
    let len = this._list.length
    for (let i = 0; i < len; i++){
      console.log(this._list[i])
    }
  }
}

// exports = { IncludeData:IncludeData }
module.exports = IncludeData