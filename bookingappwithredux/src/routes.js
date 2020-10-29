import React from 'react';
import {Switch, Route, Router} from 'react-router-dom';

import Home from './pages/Home';
import Reservas from './pages/Reservas';

export default function Routes() {
    return(
        <Switch>
            <Route path="/" component={Home} />
            <Route path="/reservas" component={Reservas}/>
        </Switch>
    );
}