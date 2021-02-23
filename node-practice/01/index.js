"use strict";

var env = process.env.NODE_ENV || "development"

if (require.main === module) {
  main({ argv: process.argv })
}


function main(options){
  var argv = options.argv
  var name = argv[2]

  if (env === "development"){
    console.log("Hello world!")
  } else if (env === "production"){
    console.log("Hello," + name + "!")
  } else {
    throw new Error("invalid env")
  }
}
