const express = require('express');
const router = express.Router();
const studentBank = require('../data/studentBank.js');
let students = studentBank.list();

router.get('/',(req,res,next)=>{
    res.send('Home Page!');
    next();
})

router.get('/students',(request,response,next) =>{
    response.send(students);
    next();
});

router.get('/students/:name',(req,res)=>{
    let name = req.params.name;
    students.forEach(element => {
        if(name === element.name.toLowerCase()){
            res.send(element);
        }
    })
});



module.exports = router;