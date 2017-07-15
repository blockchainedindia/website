/**
 * Created by Anirudha.
 * Helper File
 * Write additional functions to be used in Project here.
 *
 */

var constants = require('./constants');

exports.structureViewData = function(viewKey) {
    var rowLimit = 3;
    var allData = [];
    if (viewKey == 'city') {
        allData = constants.cities();
    }
    else if (viewKey == 'team') {
        allData = constants.teamMembers();
    }
    var columnKey = 0;
    var allDataStructured = {};
    var allDataStructuredSingle = [];
    for (var i = 0, len = allData.length; i < len; i++) {
        if(allData[i]['isActive']) {
            var structureLimit = Math.floor((i / rowLimit));
            allData[i]['classKey'] = constants.rowClasses(i % rowLimit);
            if (viewKey == 'team') {
                allData[i]['socialData'] = this.socialDataStructured(allData[i]['socialHandles']);
            }
            if (structureLimit != columnKey) {
                columnKey = structureLimit;
                allDataStructuredSingle = [];
            }
            allDataStructuredSingle.push(allData[i]);
            allDataStructured[columnKey] = allDataStructuredSingle;
        }
    }
    return allDataStructured;
};

exports.socialDataStructured = function(socialData) {
    var socialStructuredData = [];
    for(var socialKey in socialData){
        var socialValue = socialData[socialKey];
        socialStructuredData.push({
            'socialKey': socialKey,
            'socialLink': socialValue,
            'socialIconClass': constants.socialAccounts(socialKey)['iconClass']
        })
    }
    return socialStructuredData;
};
