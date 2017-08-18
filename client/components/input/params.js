import React from 'react'
import { connect } from 'react-redux'
import { input, getIssues } from '../../actions/action'

const mapStateToProps = ({inputState: {params}}) => ({params})

const mapDispatchToProps = dispatch => ({
  add: (event, data, params) => {
    dispatch(input.params(event))
    dispatch(getIssues.pending(data, params))
  }
})

export const Params = ({add, data, params}) =>
  <div className="params">
    <label htmlFor="per_page">Кол-во обращений:
      <select id="per_page" onChange={(e) => add(e.target, data, params)}>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
    </label>
    <label htmlFor="state">Состояние обращений:
      <select id="state" onChange={(e) => add(e.target, data, params)}>
        <option value="all">all</option>
        <option value="open">open</option>
        <option value="closed">closed</option>
      </select>
    </label>
  </div>

export default connect(mapStateToProps, mapDispatchToProps)(Params)
