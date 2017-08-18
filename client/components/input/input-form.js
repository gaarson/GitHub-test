import React from 'react'
import { connect } from 'react-redux'
import { input, getIssues, getRepos } from '../../actions/action'

import ErrorComponent from '../error/error'
import Owner from '../owner/owner'

const mapStateToProps = ({inputState, error}, {history}) => ({inputState, error, history})

const mapDispatchToProps = dispatch => ({
  getRepos: (user, history) => dispatch(getRepos.pending(user, history)),
  inputChange: (event) => dispatch(input.change(event))
})

const InputForm = ({
  inputChange,
  inputState,
  getIssues,
  getRepos,
  history,
  error
}) =>
  <div className="input-data">
    <label htmlFor="owner" className="owner-label">Автор:
      <input
        id="owner"
        className="owner"
        type="text"
        value={inputState.name || ''}
        placeholder="owner"
        onKeyDown={(e) => (e.keyCode === 13) && getRepos(inputState.name, history)}
        onChange={e => inputChange(e.target)}/>
    </label>
    <Owner />
  </div>

export default connect(mapStateToProps, mapDispatchToProps)(InputForm)
