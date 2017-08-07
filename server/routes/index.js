var express = require('express');
var router = express.Router();
var models = require('../models/index');
var helpers = require('../helpers');


// Routes

router.get('/', function(req, res, next) {
    var citiesData = helpers.structureViewData('city');
    var citiesCount = citiesData[0].length;
    console.log(citiesData[0]);
    console.log(citiesCount);
    var teamData = helpers.structureViewData('team');
    var partnerData = helpers.structureViewData('partner');
    res.render('pages/home', { title: 'Blockchained India', citiesData: citiesData, teamData: teamData, partnerData: partnerData, citiesCount: citiesCount });
});

router.get('/about', function(req, res, next) {
    res.render('general/about', { title: 'Blockchained India' });
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

router.get('/rebranding', function(req, res, next) {
    res.render('rebranding', { title: 'Blockchained India' });
});

module.exports = router;
