
// var min = 1, max = 10;

function intRandom(min, max){

  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// ランダムな数を生成する関数
function intArrRandom(min, max, k){
  var randoms = [];

  for(i = 0; i < k; i++){
    while(true){
      var tmp = intRandom(min, max);
      if(!randoms.includes(tmp)){
        randoms.push(tmp);
        break;
      }
    }
  }
  return randoms;
}

var results = intArrRandom(1, 10, 5);
console.log(results);
