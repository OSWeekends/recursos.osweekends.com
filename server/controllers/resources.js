var mongojs = require('mongojs');
var db = mongojs('mongodb://jorge:jorge@ds111299.mlab.com:11299/resources', ['resources']);

module.exports = {

  list: function (req, res, next) {
    db.resources.find(function(err, resources){
      if(err){
          res.send(err);
      }
      res.json(resources);
  })
  },
};