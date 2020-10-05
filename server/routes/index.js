var express = require('express');
var router = express.Router();
var models = require('../models/index');
var helpers = require('../helpers');
var constants = require('../constants');

// Routes

router.get('/', function(req, res, next) {
    // var citiesData = helpers.structureViewData('city');
    // var cityKeys = Object.keys(citiesData);
    // var citiesCount = 0;
    // for(var i = 0; i < cityKeys.length;i++){
    //     citiesCount += citiesData[i].length;
    // }
    // var teamData = helpers.structureViewData('team');
    // var partnerData = helpers.structureViewData('partner');
    // var mentorsData = helpers.structureViewData('mentors');
    res.render('pages/home', { title: 'Blockchained India' });
});

router.get('/gallery', function(req, res, next) {
    res.render('pages/gallery', { title: 'Blockchained India Gallery' });
});

router.get('/talks', function(req, res, next) {
    let talksData = constants.talks();
    // console.log('talksData:', talksData);
    res.render('pages/talks', { title: 'Blockchained India Talks', talksData: talksData });
});

router.get('/demo', function(req, res, next) {
    res.render('pages/demo', { title: 'Blockchained India' });
});

router.get('/sendy_subscribeform', function (req, res, next) {
    res.render('pages/sendy_subscribeform', { title: 'Join our Subscriber list' });
});

router.get('*', function(req, res, next) {
    res.render('pages/error-pages/not_found', { title: 'Blockchained India | 404 | Not Found' });
});

module.exports = router;