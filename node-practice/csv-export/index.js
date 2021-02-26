'use strict';

var ejs = require('ejs')

var template = [
  'Name,Age',
  '<% users.forEach(function (user){ -%>',
  '<%= user.name%>,<%= user.age%>',
  '<% })-%>',
].join('\n')


var options = {
  users: [
    { name: 'A', age: 20},
    { name: 'B', age: 25},
    { name: 'C', age: 30},
    { name: 'D', age: 35},
    { name: 'E', age: 40},
  ],
}

var result = ejs.render(template, options)

console.log(result)
