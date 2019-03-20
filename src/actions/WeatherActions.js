import Dispatcher from '../dispatchers';
import ActionTypes from '../constants';
import RemoteAPI from '../utils';

class WeatherActions {
    remoto(city) {
        Dispatcher.dispatch({
           actionType: ActionTypes.API_CALL,
        });

        RemoteAPI.get(city);
    }

    changeCity(newCity) {
        Dispatcher.dispatch({
            actionType: ActionTypes.CHANGE_CITY,
            payload: newCity
        });
    }

    receive(data) {
        Dispatcher.dispatch({
            actionType: ActionTypes.API_RETURN,
            payload: data
        });
    }
}

export default new WeatherActions();