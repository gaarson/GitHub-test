import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getRepos } from '../../actions/action'
import ReactPaginate from 'react-paginate'

import ErrorComponent from '../error/error'

const mapStateToProps = ({repos}, {match: {params: {user}}}) => ({ user, repos })

const mapDispatchToProps = dispatch => ({
  getRepos: (user, page) => dispatch(getRepos.pending(user, null, page))
})

class ReposList extends React.Component {
  componentDidMount () {
    this.props.getRepos(this.props.user)
  }

  render () {
    const {repos, getRepos, user} = this.props
    return (
      <div className="repos-data">
        <h3>Репозитории</h3>
        <ul className="repos-list">
          {
            repos.length ? repos.map(repo =>
              <li key={repo.id}>
                <Link to={`/${repo.full_name}`} className="repo">
                  <p>{repo.name}</p>
                </Link>
              </li>
            ) : <ErrorComponent error="Репозиториев не найдено" />
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
          onPageChange={(page) => getRepos(user, page.selected)}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReposList)
