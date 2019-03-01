import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Country from './Country';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/weather' component={Country} />
        </Switch>
    </main>
)

export default Main;