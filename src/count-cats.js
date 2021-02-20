module.exports = function countCats(matrix) {
  let count = 0;
  for(let arr of matrix){
    for(let i of arr){
      if(i === '^^'){
        count += 1;
      }
    }
  }
  return count
};