var express = require('express');
var router = express.Router();
var models = require('../models/index');
var helpers = require('../helpers');


// Routes

router.get('/', function(req, res, next) {
    var citiesData = helpers.structureViewData('city');
    var teamData = helpers.structureViewData('team');
    res.render('pages/home', { title: 'Blockchained India', citiesData: citiesData, teamData: teamData });
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
