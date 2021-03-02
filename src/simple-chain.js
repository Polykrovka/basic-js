

const chainMaker = {

  anser: [],

  getLength() {
    return this.anser.length;
  },

  addLink(value) {
    if(value === undefined){
      this.anser.push('()');
      return this;
    } else {
    this.anser.push('( ' + value + ' )');
    return this;
    } 
  },

  removeLink(position) {
    if(position > this.anser.length || position <= 0 || typeof(position) !== 'number'){
      this.anser = [];
      throw Error('removing wrong link');
    } else {
      this.anser.splice(position-1, 1)
      return this;
    }
    
  },

  reverseChain() {
    this.anser = this.anser.reverse();
    return this; 
  },

  finishChain() {
    let result = this.anser.join('~~')
    this.anser = [];
    return result;
  }
};

module.exports = chainMaker;
