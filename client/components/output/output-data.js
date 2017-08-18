import React from 'react'
import { connect } from 'react-redux'

import IssuesList from './issues-list.js'

class OutputData extends React.Component {
  render () {
    return (
      <div>
        <IssuesList />
        ISSUES FROM REQUEST
      </div>
    )
  }
}

export default OutputData
