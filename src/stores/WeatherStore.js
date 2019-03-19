import { EventEmitter } from 'events';
import  Dispatcher from '../dispatchers';

let city = "";
let cityWeather = {};

class WeatherStore extends EventEmitter {
    constructor() {
        super();
        Dispatcher.register(this._registerToActions.bind(this));
    }

    _registerToActions(action) {
        switch(action.actionType) {
            case 'INITIALISE':
                this.emit('CAMBIO');
                break;
            case 'CHANGE_CITY':
                this.changeCity(action.payload);
                break;
            case 'API_CALL':
                this.apiCall(action.initialData.bill);
        }
    }

    addChangeListener(callback) {
        this.on('CAMBIO', callback);
    }

    removeChangeListener(callback) {
        this.removeListener('CAMBIO', callback);
    }

    changeCity(newCity) {
        city = newCity;
        this.emit('CAMBIO');
    }

    getCity() {
        return city;
    }

    apiCall(data) {
        cityWeather = data;
        this.emit('CAMBIO');
    }

    getData() {
        return cityWeather;
    }
}

export default new WeatherStore();