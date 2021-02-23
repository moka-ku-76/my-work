'use strict';

var _= require('lodash')

var users = [
  { name: 'A', age: 20 },
  { name: 'B', age: 30 },
  { name: 'C', age: 40 }
]

var result = _.find(users, ['name','B'])

console.log(result)
