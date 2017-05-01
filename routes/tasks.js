var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://test:test@ds127531.mlab.com:27531/products', ['tasks']);

router.get('/tasks', function(req, res, next){
	db.tasks.find(function(err, tasks){
		if(err) {
			res.send(err);
		}
		res.json(tasks);
	});
});

module.exports = router;