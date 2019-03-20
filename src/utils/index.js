import Constants from '../constants';
import WeatherActions from '../actions/WeatherActions';

var request = require('superagent');

var RemoteAPI = {
    get: (city) => {
        request.get('https://api.openweathermap.org/data/2.5/weather?q='+ city +'&APPID=' +  Constants.APP_ID + '&units=metric')
        .set('Accept', 'application/json')
        .end((err, response) => {
            if (err) return console.error(err);

            console.log(response.body);
            var payload = {};
            payload.humidity = response.body.main.humidity;
            payload.pressure = response.body.main.pressure;
            payload.temp = response.body.main.temp;
            payload.temp_max = response.body.main.temp_max;
            payload.temp_min = response.body.main.temp_min;
            //console.log(payload);

            WeatherActions.receive(payload);
        });
    }
};

export default RemoteAPI;