
const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
if(sampleActivity == null || typeof(sampleActivity) !== "string" || sampleActivity === Infinity || isNaN(sampleActivity) ){
    return false;
}
if(sampleActivity.length < 15){
    return false;
}
let k = 0.693 / HALF_LIFE_PERIOD;
let t = Math.ceil(MODERN_ACTIVITY / sampleActivity) / k;
console.log(t);
if(t === Infinity) {
    return false;
}
return t;

// Формула t = ln(Nнул / N) / (0.693 / HALF_LIFE_PERIOD)

};
