

module.exports = function repeater(str, options) {

  let anser = '';
  let string = String(str);
  let repeatTimes = (options.repeatTimes || 1);
  let separator = (options.separator || '+');
  let additionSeparator = (options.additionSeparator || '')
  let addition = (typeof options.addition === 'boolean' || options.addition === null) ? String(options.addition) : (options.addition || '');
  let additionRepeatTimes = (options.additionRepeatTimes || 1);
  if(additionRepeatTimes !== 1){
    addition = (addition + additionSeparator).repeat(additionRepeatTimes).slice(0, - additionSeparator.length);
  }

  anser += ((separator + string + addition).repeat(repeatTimes).substring(separator.length));
  return anser;
};
  