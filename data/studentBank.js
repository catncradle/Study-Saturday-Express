// const _ = require('lodash');

let students = [
  { name: "Yang", id: 0 },
  { name: "Lindsay", id: 1 },
  { name: "Plamen", id: 2 }
];

function add(name,id){
    student.push({
        [name]:id
    });
}

function list(){
  return (function(){
    return students;
  })();
}

function find(){}

module.exports;

module.exports['list'] = list;