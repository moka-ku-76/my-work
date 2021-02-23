'use-strict';

var crypto = require('crypto')

if (require.main === module){
  main({ argv: process.argv })
}

function main(options){
  var argv = options.argv
  var plain = argv[2]


  var hash = crypto.createHash('sha256')
  hash.update(plain)

  var digest = hash.digest('base64')

  console.log('plain: ' + plain)
  console.log('digest: ' + digest)
}
