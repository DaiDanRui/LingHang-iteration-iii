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
import SkillInfo from './pages/SkillInfo/SkillInfo'
import BuySkill from './pages/BuySkill/BuySkill'
import MyPublic from './pages/MyPublic/MyPublic'
import MyAccepted from './pages/MyAccepted/MyAccepted'
import MyStars from './pages/MyStars/MyStars'
import MyComments from './pages/MyComments/MyComments'
import MyAccount from './pages/MyAccount/MyAccount'
import MySetting from './pages/MySetting/MySetting'
import AccountSetting from './pages/AccountSetting/AccountSetting'
import ModifyPassword from './pages/ModifyPassword/ModifyPassword'
import PersonalInfo from './pages/PersonalInfo/PersonalInfo'
import PersonalInfoSet from './pages/PersonalInfoSet/PersonalInfoSet'
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
        <Route path="/skill_info" components={SkillInfo} />
        <Route path="/buy_skill" components={BuySkill} />
        <Route path="/my_public" components={MyPublic} />
        <Route path="/my_accepted" components={MyAccepted} />
        <Route path="/my_stars" components={MyStars} />
        <Route path="/my_comments" components={MyComments} />
        <Route path="/my_account" components={MyAccount} />
        <Route path="/my_setting" components={MySetting} />
        <Route path="/account_setting" components={AccountSetting} />
        <Route path="/modify_password" components={ModifyPassword} />
        <Route path="/personal_info" components={PersonalInfo} />
        <Route path="/personal_info_set" components={PersonalInfoSet} />
    </Router>
), document.getElementById('root'));