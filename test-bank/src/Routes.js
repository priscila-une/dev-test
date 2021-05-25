import React from 'react'
import { Switch, BrowserRouter, Route} from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Notfound from './components/Notfound'

import {history} from './history'

const Routes = () => (
    <BrowserRouter history={history} >
        <Switch>
            <Route component={Login} exact path="/login"/>
            <Route component={Register} exact path="/register"/>
            <Route component={Home} exact path="/"/>
            <Route component={Notfound}/>
        </Switch>
    </BrowserRouter>
)

export default Routes;