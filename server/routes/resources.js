var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://jorge:jorge@ds111299.mlab.com:11299/resources', ['resources']);

router.get('/resources', function(req, res, next){
    db.resources.find(function(err, resources){
        if(err){
            res.send(err);
        }
        res.json(resources);
    })
});

module.exports = router;