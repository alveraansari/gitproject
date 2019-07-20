var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET register */
router.get('/register', function(req, res, next) {
  res.json({ login:true });
});

require('../models/batch');
 
var mongoose = require('mongoose');
var Superhero = mongoose.model('superheros');

 
 router.post('/add', function(req, res) {
    new Superhero({name : req.body.name,
       email : req.body.email,
        password : req.body.password,
      address : req.body.address,
      city: req.body.city
    }
   
   
)
    .save(function(err, superhero) {
      console.log(superhero)
      res.json(superhero);
    });
  });
  
  router.get('/view',function(req,res){
    Superhero.find(function(err,superhero){
      console.log(err);
      console.log(superhero);
      res.json(superhero);
    });
  });
  router.put('/update/:id',function(req,res){
    var query={"_id":req.params.id};
    Superhero.findOneAndUpdate(query,function(err,superhero){
      console.log(superhero)
      res.json(superhero);
    });
  });
  router.delete('/update/:id',function(req,res){
    var query={"_id":req.params.id};
    Superhero.findOneAndRemove(query,function(err,Superhero){
      console.log(Superhero)
      res.json(Superhero);
    });
  });

module.exports = router;
