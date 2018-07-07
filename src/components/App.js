import React, { Component } from 'react'
import {connect} from 'react-redux'
import ListGrid from '../containers/ListGridContainer'
import List from '../containers/ListContainer'
import ErrorPage from './ErrorPage'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/"   component={ListGrid}/>
            <Route path="/list/:id" component={List}/>
            <Route exact path="*"   component={ErrorPage}/>
          </Switch>
        </Router>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  lists: state.lists,
})

export default connect(
  mapStateToProps
)(App);
