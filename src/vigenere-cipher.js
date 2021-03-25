const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(trueOrFalse) {
    this.trueOrFalse = trueOrFalse;
  }
  

  encrypt(str, key) {
    if (typeof str !== 'string' || typeof key !== 'string') {
      throw new Error;
    }
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    let strArr = str.toUpperCase().split('');
    let keyArr = key.toUpperCase().split('');
    let j = 0;
    let symbolCode = 0;
    let result = [];
    for(let i = 0; i < str.length; i++){
      if (keyArr[j] === undefined) {
        j = 0;             // ключ кончился, начни сначала
      }
      if (!alphabet.includes(strArr[i])) {
        result.push(strArr[i]); 
        continue;
        
      }
      symbolCode = strArr[i].charCodeAt() + keyArr[j].charCodeAt() - 65;
      if (symbolCode > 90) {
        symbolCode -= 26;   //букв в алфавите на случай если индекс больше Z
      }
      result.push(String.fromCharCode(symbolCode))
      j += 1;
    }

    if (this.trueOrFalse === false) {
      return result.reverse().join('');
    } else {
      return result.join('');
    } 

  }    
  decrypt(str, key) {
    if (typeof str !== 'string' || typeof key !== 'string') {
      throw new Error;
    }
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    let strArr = str.toUpperCase().split('');
    let keyArr = key.toUpperCase().split('');
    let j = 0;
    let symbolCode = 0;
    let result = [];
    for(let i = 0; i < str.length; i++){
      if (keyArr[j] === undefined) {
        j = 0;             // ключ кончился, начни сначала
      }
      if (!alphabet.includes(strArr[i])) {
        result.push(strArr[i]);  
        continue;        // Для посторонних символов ключ не нужен
      }
      symbolCode = strArr[i].charCodeAt() - keyArr[j].charCodeAt() + 65;
      if (symbolCode < 65) {
        symbolCode += 26;   //букв в алфавите на случай если индекс меньше A
      }
      result.push(String.fromCharCode(symbolCode))
      j += 1;
    }
    if (this.trueOrFalse === false) {
      return result.reverse().join('');
    } else {
      return result.join('');
    } 
      
    
  }    
}



module.exports = VigenereCipheringMachine;
