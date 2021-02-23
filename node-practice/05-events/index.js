'use-strict';

var events = require('events')

var eventEmitter = new events.EventEmitter()

eventEmitter.on('click',function (){
  console.log('click!')
})

eventEmitter.on('dbclick',function (){
  console.log('double click!')
})

eventEmitter.on('click',function (){
  console.log('click!!!!')
})

console.log('1. emit "click" event: ')
eventEmitter.emit('click')

console.log('2. emit "dbclick" event: ')
eventEmitter.emit('dbclick')

console.log('3. end')

// if (require.main === module){
//   main({ argv: process.argv })
// }
//
// function main(options){
//   var argv = options.argv
//   var plain = argv[2]
//
//
//   var hash = crypto.createHash('sha256')
//   hash.update(plain)
//
//   var digest = hash.digest('base64')
//
//   console.log('plain: ' + plain)
//   console.log('digest: ' + digest)
// }
