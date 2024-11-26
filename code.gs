function sendSMS() {
    const username = PropertiesService.getScriptProperties().getProperty('username');
    const password = PropertiesService.getScriptProperties().getProperty('password');
    const headers = {
        "Authorization": "Basic " + Utilities.base64Encode(username + ':' + password),
    };

    const data = {
        message: "Hello from Google Apps Script!",
        phoneNumbers: [
            "+19162255887"
        ],
    };

    const response = UrlFetchApp.fetch(
        'https://api.sms-gate.app/3rdparty/v1/message',
        {
            method: 'POST',
            contentType: 'application/json',
            headers: headers,
            payload: JSON.stringify(data),
            muteHttpExceptions: true
        }
    );
    Logger.log(response);
}
