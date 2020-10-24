const express = require('express');
var router = express.Router();
var objectId =require('mongoose').Types.ObjectId;

var { studentsModel } = require('../database/model/dbmodel');

router.get('/', (req, res)=> {
    studentsModel.find((err, docs)=>{
        if(!err) { res.send(docs)}
        else {console.log('Error in Retriving student :' + JSON.stringify(err, undefined, 2));}
    });
});

router.get('/:id', (req,res)=>{
    if(!objectId.isValid(req.params.id))
    return res.status(400).send(`no record with given id : ${req.params.id}`);

    studentsModel.findById(req.params.id, (err, doc)=>{
        if(!err){ res.send(doc);}
        else { console.log('error in retriving student :' + JSON.stringify(err, undefined,2));}
    });
});



router.post('/', (req, res, next)=>{
    const emp = new studentsModel({
        name: req.body.name,
        dept: req.body.dept,
        sec: req.body.sec,
        regno: req.body.regno,
    });

    emp.save((err, doc) => {
        if(!err) { res.send(doc); }
        else { console.log('Error in student Save :'+ JSON.stringify(err, undefined, 2));}
    });
});


router.put('/:id', (req, res)=>{
    if(!objectId.isValid(req.params.id))
    return res.status(400).send(`no record with given id : ${req.params.id}`);

    var emp ={
        name: req.body.name,
        dept: req.body.dept,
        sec: req.body.sec,
        regno: req.body.regno,
    };
    studentsModel.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true}, (err, doc)=>{
       if(!err) {res.send(doc);}
       else {console.log('error in student Update' + JSON.stringify(err, undefined, 2));}
   });

});

router.delete('/:id', (req,res)=> {
    if(!objectId.isValid(req.params.id))
    return res.status(400).send(`no record with given id : ${req.params.id}`);

    studentsModel.findByIdAndRemove(req.params.id, (err,doc)=> {
        if(!err) {res.send(doc); }
        else { console.log('error in student Delete : '+JSON.stringify(err,undefined,2));}
    });
});

module.exports = router;