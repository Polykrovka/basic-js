

module.exports = function createDreamTeam(members) {
  console.log(members)
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
  console.log(anser.sort().join(''));
  return anser.sort().join('');
};
