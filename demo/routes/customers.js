var express = require('express');
var router = express.Router();
var Customer=require("../models/customer");

/* GET home page. */
router.post('/add', function(req, res, next) {

    var newCustomer= new Customer(req.body);
    newCustomer.save( (err,customer)=>{
        if(err){
            res.send(err);
        }else{
            res.json({messege:"user added successfully",customer});
        }
    }
    );
});

/* GET home page. */
router.get('/list', function(req, res, next) {
    let query=Customer.find({});
    query.exec((err,customers)=>{
        if(err){
            res.send(err);
        }else{
            res.json({customers});
        }
    });
  });

  /* GET home page. */
router.get('/profile/:id', function(req, res, next) {
    Customer.findById(req.params.id, (err, customer) => {
        if(err) res.send(err);
        res.json(customer);
        });
  });



  /* GET home page. */
router.post('/update/:id', function(req, res, next) {
    Customer.findById({_id: req.params.id}, (err, customer) => {
        if(err) res.send(err);
        Object.assign(customer, req.body).save((err, customer) => {
          if(err) res.send(err);
          res.json({ message: 'Customer updated!', customer });
        }); 
      });
    
  });

  /* GET home page. */
router.get('/delete/:id', function(req, res, next) {
    Customer.remove({_id : req.params.id}, (err, customer) => {
        res.json({ message: "Customer Info successfully deleted!", customer });
      });

    });

    module.exports = router;