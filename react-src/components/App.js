import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'

export default function App(props) {

  return (
    <>
      <Router>
          <Switch>
            <Route exact path='/'>
              <Home name='Hello.'/>
            </Route>
          </Switch>
      </Router>
    </>
  )

}
