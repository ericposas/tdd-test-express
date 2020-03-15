import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <>
        <Router>
            <Switch>
              <Route exact path='/' render={() => (
                  <div>Now serving React content.</div>
                )}/>
            </Switch>
        </Router>
      </>
    )
  }

}

export default App
