//main.js 
import React from 'react'
import {render} from 'react-dom'
import {Router, Route, browserHistory} from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'

import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Market from './pages/Market/Market'
import MarketPublic from './pages/MarketPublic/MarketPublic'
import My from './pages/My/My'

import {LikeButton} from './tests/Test'

import s from './main.scss'

injectTapEventPlugin();
render((
    <Router history={browserHistory}>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/market" component={Market} />
        <Route path="/market_public" component={MarketPublic} />
        <Route path="/my" components={My} />
    </Router>
), document.getElementById('root'));