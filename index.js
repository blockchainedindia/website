const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');

// FolderId of main folder in drive which contains sub folders event wise
const galleryId = '19MCjURTZf7hp-S_VLqCqZ8q68XPPA9ac';  

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/drive.metadata.readonly'];
const TOKEN_PATH = 'token.json';

// Load client secrets from a local file.
fs.readFile('credentials.json', (err, content) => {
  if (err) return console.log('Error loading client secret file:', err);
  // Authorize a client with credentials, then call the Google Drive API.
  authorize(JSON.parse(content), listFiles);
});

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
  const {client_secret, client_id, redirect_uris} = credentials.installed;
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

// Function to get all the id's from google drive and prepare a json file of same
// which can be later used to display images on website

function listFiles(auth) {
  const drive = google.drive({version: 'v2', auth});

// Fetching id's for events' folders present within the main folder 
  drive.children.list({folderId: galleryId},(err,res)=>
  {
      if(err) return console.log('The API returned an error' + err);    
    
      let DataList = [];
      const events = res.data.items;
      if (events.length) {
        console.log('Event Folders');
        events.map((folder) => {
		  console.log(`${folder.id}`);
		  
		  //Fetching details(event name) for each event
          drive.files.get({fileId:folder.id},(err,res)=>{
            if(err) return console.log(`Error occured while fetching event folder (${folder.id}) details`);
            const event = {
              title: res.data.title,
              id: folder.id,
              images: []
			}
			// Fetching children(images' id) for each event
            drive.children.list({folderId:folder.id},(err,res)=>{
			if(err) return console.log(`Error occured while fetching event folder (${folder.id}) children`);
			// pushing image id's to event object
			for(var i=0;i<res.data.items.length;i++)
			{
				event.images.push('https://drive.google.com/file/d/' + res.data.items[i].id + '/preview');
			}
			DataList.push(event);
			console.log(DataList);
			fs.writeFile('gallery.json',JSON.stringify(DataList),(err)=>{
				if(err) throw error;
				console.log('gallery.json created'); 
			})
            })
          });
        });
      } else {
        console.log('No folders found.');
      }
	});
}