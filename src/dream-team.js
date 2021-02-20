

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)){
    return false;
  }
  let anser = [];
  for(let i of members){
    if(typeof(i) !== 'string' || i == 0){
      continue;
    }
    anser.push(i.trim()[0].toUpperCase())
  }
  return anser.sort().join('');
};
