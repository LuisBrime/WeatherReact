import { EventEmitter } from 'events';
import  Dispatcher from '../dispatchers';

class WeatherStore extends EventEmitter {
    constructor() {
        super();
        Dispatcher.register(this._registerToActions.bing(this));
    }

    _registerToActions(action) {
        switch(action.actionType) {
            case 'INITIALISE':
                this.emit('CAMBIO');
                break;
        }
    }

    addChangeListener(callback) {
        this.on('CAMBIO', callback);
    }

    removeChangeListener(callback) {
        this.removeListener('CAMBIO', callback);
    }
}

export default new WeatherStore();