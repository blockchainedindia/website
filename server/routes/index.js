var express = require('express');
var router = express.Router();
var models = require('../models/index');
var helpers = require('../helpers');


// Routes

router.get('/', function(req, res, next) {
    var citiesData = helpers.structureViewData('city');
    var cityKeys = Object.keys(citiesData);
    var citiesCount = 0;
    for(var i = 0; i < cityKeys.length;i++){
        citiesCount += citiesData[i].length;
    }
    var teamData = helpers.structureViewData('team');
    var partnerData = helpers.structureViewData('partner');
    var mentorsData = helpers.structureViewData('mentors');
    res.render('pages/home', { title: 'Blockchained India', citiesData: citiesData, teamData: teamData, partnerData: partnerData, citiesCount: citiesCount, mentorsData: mentorsData });
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

router.get('/gallery', function(req, res, next) {
    res.render('pages/gallery', { title: 'Gallery | Blockchained India' });
});

router.get('/talks', function(req, res, next) {
    var talksData = helpers.talksDataStructured();
    // console.log(talksData);
    res.render('pages/talks', { title: 'Talks | Blockchained India', talksData: talksData });
});

router.get('/404', function(req, res, next) {
    res.render('pages/error-pages/not_found', { title: 'Blockchained India | 404 | Not Found' });
});

module.exports = router;
