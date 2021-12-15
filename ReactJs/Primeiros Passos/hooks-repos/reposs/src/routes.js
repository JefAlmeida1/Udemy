import React from 'react';
import {BrowserRouter, Switch, Routes} from 'react-router-dom';

import Main from './pages/Main';
import Repositorio from './pages/Repositorio';


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Routes exact path='/' component={Main} />
                <Routes exact path="/repositorio" component={Repositorio} />
            </Switch>
        </BrowserRouter>
    )
}