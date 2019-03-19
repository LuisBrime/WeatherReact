import Dispatcher from '../dispatchers';
import ActionTypes from '../constants';
import RemoteAPI from '../utils';

class WeatherActions {
    remoto() {
        Dispatcher.dispatch({
           actionType: ActionTypes.INITIALISE,
           initialData: {
               bill: RemoteAPI.get()
           } 
        });
    }
}

export default new WeatherActions();