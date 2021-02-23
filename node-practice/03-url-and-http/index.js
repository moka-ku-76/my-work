'use strict';

var url = require('url')
var http = require('http')


if(require.main === module){
  main({ argv: process.argv })
}

function main(options){
  var argv = options.argv
  var href = argv[2]
  var target = url.parse(href)

  var req = http.request(target, function (res){
    res.on('data', function (data){
      console.log('data', data.toString())
    })

    res.on('end', function(){
      console.log('end')
    })
  })

  req.end()
}
