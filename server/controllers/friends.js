var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

module.exports = (function() {
  return {

    show: function(req, res) {
      Friend.find({}, function(err, results){
      	if(err) {
      		console.log(err);
      	} else {
      		res.json(results);
      	}
      });
    },

    post: function(req, res) {
      Friend.create(req.body, function(hello, results){
        if(hello) {
          console.log(hello);
        } else {
          res.json(results);
        }
      });
    },

    deleteFriend: function(req, res) {
      Friend.remove({_id: req.params.id}, function(error) {
          if(error) {
            console.log("Error deleting friend");
          } else {
            console.log("Friend deleted!");
            res.redirect('/');
          }
      });
    }
  }
})();
