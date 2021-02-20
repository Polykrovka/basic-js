

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  console.log(disksNumber, turnsSpeed);
  let turns = 2 ** disksNumber - 1;
  let seconds = Math.floor(turns * 3600 / turnsSpeed);
  console.log(turns, seconds)
  return {'turns': turns, 'seconds': seconds};
};
