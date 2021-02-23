'use strict';

var math = require('./math')

if (require.main === module) {
  main()
}

function main(){
  console.log('1 + 2 = ' + math.add(1,2))
  console.log('3 - 4 = ' + math.sub(3,4))
  console.log('5 * 6 = ' + math.mul(5,6))
  console.log('7 / 8 = ' + math.div(7,8))
}
