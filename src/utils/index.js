import Constants from '../constants';

var request = require('superagent');

var RemoteAPI = {
    get: () => {
        request.get('https://api.openweathermap.org/data/2.5/weather?q=London&APPID=' +  Constants.APP_ID)
        .set('Accept', 'application/json')
        .end((err, response) => {
            if (err) return console.error(err);

            console.log(response.body);
            return response.body;
        });
    }
};

export default RemoteAPI;