import Constants from '../constants';

var request = require('superagent');

var RemoteAPI = {
    get: () => {
        request.get('api.openweathermap.org/data/2.5/forecast?q=London')
        .set('APPID', Constants.APP_ID)
        .set('Accept', 'application/json')
        .withCredentials()
        .end((err, response) => {
            if (err) return console.error(err);

            console.log(response.body);
        });
    }
};

module.exports = RemoteAPI;