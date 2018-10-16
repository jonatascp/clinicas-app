import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Clinicas from '../clinicas/clinicas'
import About from '../about/about'

export default props => (
    <Router history={hashHistory}>
        <Route path='/clinicas' component={Clinicas} />
        <Route path='/about' component={About} />
        <Redirect from='*' to='/clinicas' />
    </Router>
)