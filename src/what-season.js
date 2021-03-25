const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(date === undefined){
    return 'Unable to determine the time of year!';
  }
  console.log(date)
  if(typeof(date) !== 'object'){
    
  }
  let month = date.getUTCMonth() + 1;
  console.log(month);
  if(month === 12 || month <= 2){
    return 'winter';
  } else if (month >= 3 && month <= 5) {
    return 'spring';
  } else if (month >= 6 && month <= 8) {
    return 'summer';
  } else if (month >= 9 && month <= 11) {
    return 'autumn';
  }





};
