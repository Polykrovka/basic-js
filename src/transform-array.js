const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!Array.isArray(arr)){
    throw Error("It isn't an array")
  }

  let ansver = [];
  let exist = false;
  
  for(let i = 0; i < arr.length; i++){
    switch (arr[i]) {
      case '--discard-next':
        i += 1;
        exist = false;
        break;

      case '--discard-prev':
      if(exist){
        ansver.pop()
      }
        break;


      case '--double-next':
        if(i < arr.length - 1){  
          ansver.push(arr[i + 1]) 
        }
        break;

      case '--double-prev':
        if(exist){
          ansver.push(arr[i - 1])
        }
        break;

      default:
        ansver.push(arr[i]);
        exist = true;
    }
  }
  return ansver;

};

