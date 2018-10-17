// Any Config to be used throughout the project is written here

module.exports = {
    server: {
        host: '0.0.0.0',
        port: process.env.PORT || 3000,
        appName: 'blockchainedindia',
        environment: process.env.environment || 'local',
        nameServer: 'http://localhost:3000'
    },
    ses: {
        accessKeyId: process.env.accessKeyId || '',
        secretAccessKey: process.env.secretAccessKey || '',
        emailFrom: '',
        emailFromName: '',
        region: 'us-east-1',
        adminEmail: ''
    },
    s3: {
        region: 'us-east-1',
        p9FormsBucketName: ''
    },
    fcm: {
        serverKey: ''
    },
    newRelic: {
        licenseKey: process.env.newRelicLicenseKey || ''
    },
    installed: {
        client_id: "397600756791-ekv992pp3cugmplk8ttk7g1al3up88lk.apps.googleusercontent.com",
        project_id: "drive-bi-1539444767377",
        auth_uri: "https://accounts.google.com/o/oauth2/auth",
        token_uri: "https://www.googleapis.com/oauth2/v3/token",
        auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
        client_secret: "YRNWnN97oodNnBX44cPYYlGj",
        redirect_uris: [
            "urn:ietf:wg:oauth:2.0:oob",
            "http://localhost"
        ]
    }
};