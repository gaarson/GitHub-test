import React from 'react'
import { connect } from 'react-redux'
import { getIssues, input } from '../../actions/action'
import ReactPaginate from 'react-paginate'

import ErrorComponent from '../error/error'
import Params from '../input/params'

const mapStateToProps = ({issues, inputState: {params}}, {match: {params: {user, repo}}}) => ({
  data: {user, repo},
  issues,
  params
})

const mapDispatchToProps = dispatch => ({
  getIssues: (data, params) => dispatch(getIssues.pending(data, params)),
  paramsChange: (event, data, params) => {
    dispatch(input.params(event))
    dispatch(getIssues.pending(data, params))
  }
})

class IssuesList extends React.Component {
  componentDidMount () {
    console.log(this.props.params)
    this.props.getIssues(this.props.data, this.props.params)
  }

  componentWillUpdate (nextProps) {
    if (nextProps.data.repo !== this.props.data.repo) {
      this.props.getIssues(nextProps.data, nextProps.params)
    }
  }

  render () {
    const {issues, paramsChange, data, params} = this.props
    return (
      <div className="issues-data">
        <h3>Обращения</h3>
        <Params data={data}/>
        <ul className="issues-list">
          {
            issues.length ? issues.map(issue =>
              <li key={issue.id}>
                <p>{issue.number}</p>
                <p>{issue.created_at}</p>
                <h5>{issue.title}</h5>
              </li>
            ) : <ErrorComponent error="Issues не найдено" />
          }
        </ul>
        <ReactPaginate
          previousLabel={'<-'}
          nextLabel={'->'}
          breakLabel={<a href="">...</a>}
          breakClassName={'break-me'}
          pageCount={5}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={(page) => paramsChange(page, data, params)}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IssuesList)
