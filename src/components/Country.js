import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Index from '../pages/Index';
import Weather from '../pages/Weather';

const Country = () => (
    <Switch>
        <Route exact path='/weather' component={Index} />
        <Route path='/weather/:id' component={Weather} />
    </Switch>
)

export default Country;