

module.exports = class DepthCalculator {
  
  calculateDepth( arr ) {
    console.log(arr);
    if(Array.isArray(arr)){
      return 1 + Math.max(0, ...arr.map(item => this.calculateDepth(item)))
    } else {
      return false;
    }
    

  }
};