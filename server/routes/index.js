var express = require('express');
var router = express.Router();
var models = require('../models/index');


router.get('/', function(req, res, next) {
  res.render('pages/home', { title: 'Blockchained India' });
});

router.get('/about', function(req, res, next) {
  res.render('general/about', { title: 'About SNHS' });
});

router.get('/demo', function(req, res, next) {
  res.render('demo', { title: 'Blockchained India' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Blockchained India' });
});

router.get('/events', function(req, res, next) {
  res.render('pages/events', { title: 'Events | Blockchained India' });
});

module.exports = router;
