import React from 'react'
import createSagaMiddleware from 'redux-saga'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { combineReducers, createStore, applyMiddleware } from 'redux'

import sagas from './side-effects/sagas'
import * as reducers from './reducer/reducer'

import InputForm from './components/input/input-form'
import ReposList from './components/output/repos-list'
import IssuesList from './components/output/issues-list'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(combineReducers(reducers), applyMiddleware(sagaMiddleware))
sagaMiddleware.run(sagas)

render(
  <Provider store={store}>
    <Router>
      <div className="container">
        <Route path='/' component={InputForm} />
        <Route path='/:user' component={ReposList} />
        <Route path='/:user/:repo' component={IssuesList} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)
