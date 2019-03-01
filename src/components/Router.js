import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Index from '../pages/Index';
import Weather from '../pages/Weather';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Index} />
            <Route path='/weather' component={Weather} />
        </Switch>
    </main>
)

export default Main;