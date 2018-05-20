var express = require('express');
var router = express.Router();
var models = require('../models/index');
var helpers = require('../helpers');

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

router.get('*', function(req, res, next) {
    res.render('pages/error-pages/not_found', { title: 'Blockchained India | 404 | Not Found' });
});

module.exports = router;
