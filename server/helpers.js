/**
 * Created by Anirudha.
 * Helper File
 * Write additional functions to be used in Project here.
 *
 */

var constants = require('./constants');
var Config = require('../config')
const fs = require('fs');
const readline = require('readline');
const { google } = require('googleapis');


exports.structureViewData = function(viewKey) {
    var rowLimit = 3;
    var allData = [];
    if (viewKey == 'city') {
        var rowLimit = 3;
        allData = constants.cities();
    }
    else if (viewKey == 'team') {
        var rowLimit = 3;
        allData = constants.teamMembers();
    }
    else if (viewKey == 'partner') {
        var rowLimit = 6;
        allData = constants.partners();
    }
    else if (viewKey == 'mentors') {
        var rowLimit = 3;
        allData = constants.mentors();
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

exports.talksDataStructured = function() {
    var allDataStructured = {};
    var maxColumnCount = {
        0: 4,
        1: 3
    };
    try {
        var allTalksData = constants.talks();
        var rowNum = 1;
        var singleDataStructured = [];
        for (var i = 1, len = allTalksData.length; i <= len; i++) {
            var a = i-1;
            if (allTalksData[a]['isActive']) {
                if(singleDataStructured.length < maxColumnCount[rowNum % 2]) {
                    allDataStructured[rowNum] = singleDataStructured;
                }
                else {
                    singleDataStructured = [];
                    rowNum++;
                }
                if (rowNum % 2 == 0) {
                    if (allTalksData.hasOwnProperty(a)) {
                        singleDataStructured.push(allTalksData[a]);
                    }
                }
                else {
                    if (allTalksData.hasOwnProperty(a)) {
                        singleDataStructured.push(allTalksData[a]);
                    }
                }
            }
        }
    }
    catch (err) {
        console.log('talksDataStructured ERR',err);
    }
    return allDataStructured;
};

exports.GetGalleryData = function (callback) {
    // FolderId of main folder in drive which contains sub folders event wise
    const galleryId = '19MCjURTZf7hp-S_VLqCqZ8q68XPPA9ac';

    // If modifying these scopes, delete token.json.
    const SCOPES = ['https://www.googleapis.com/auth/drive.metadata.readonly'];
    const TOKEN_PATH = 'token.json';
    // // Load client secrets from a local file.
    // fs.readFile('credentials.json', (err, content) => {
    //   if (err) return console.log('Error loading client secret file:', err);
    //   // Authorize a client with credentials, then call the Google Drive API.
    //   authorize(JSON.parse(content), listFiles);
    // });
    if (Config.googledrive) {
        authorize(Config.googledrive, listFiles);
    }
    else {
        console.log('Error loadin secret files');
    }

    /**
     * Create an OAuth2 client with the given credentials, and then execute the
     * given callback function.
     * @param {Object} credentials The authorization client credentials.
     * @param {function} callback The callback to call with the authorized client.
     */
    function authorize(credentials, callback) {
        const { client_secret, client_id, redirect_uris } = credentials;
        const oAuth2Client = new google.auth.OAuth2(
            client_id, client_secret, redirect_uris[0]);

        // Check if we have previously stored a token.
        fs.readFile(TOKEN_PATH, (err, token) => {
            if (err) return getAccessToken(oAuth2Client, callback);
            oAuth2Client.setCredentials(JSON.parse(token));
            callback(oAuth2Client);
        });
    }

    /**
     * Get and store new token after prompting for user authorization, and then
     * execute the given callback with the authorized OAuth2 client.
     * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
     * @param {getEventsCallback} callback The callback for the authorized client.
     */
    function getAccessToken(oAuth2Client, callback) {
        const authUrl = oAuth2Client.generateAuthUrl({
            access_type: 'offline',
            scope: SCOPES,
        });
        console.log('Authorize this app by visiting this url:', authUrl);
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        rl.question('Enter the code from that page here: ', (code) => {
            rl.close();
            oAuth2Client.getToken(code, (err, token) => {
                if (err) return console.error('Error retrieving access token', err);
                oAuth2Client.setCredentials(token);
                // Store the token to disk for later program executions
                fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
                    if (err) console.error(err);
                    console.log('Token stored to', TOKEN_PATH);
                });
                callback(oAuth2Client);
            });
        });
    }

    function listFiles(auth) {
        const drive = google.drive({ version: 'v3', auth });

        drive.files.list({ q: "'" +galleryId + "' in parents",orderBy:'createdTime desc' })
            .then((folderList) => {
                let DataList = [];
                var j = 1;
                folderList.data.files.map((folder) => {
                    const event = {
                        title: folder.name,
                        id: folder.id,
                        images: []
                    }
                    DataList.push(event);
                    drive.files.list({ q: "'" + folder.id + "' in parents" }).then(imageList => {
                        var index =  DataList.findIndex((event)=>{
                            return event.id === folder.id;
                        })
                        for (var i = 0; i < imageList.data.files.length; i++) {
                            DataList[index].images.push('https://drive.google.com/file/d/' + imageList.data.files[i].id + '/preview');
                        }
                        if (j == folderList.data.files.length) {
                            callback(DataList);
                        }
                        j++;
                    }).catch(err => {
                        console.log('err in drive.files.list 2', err);
                    });
                });
            })
            .catch(err => {
                console.log('err in drives.files.list', err);
            });
    }
};