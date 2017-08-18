import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = ({repos}) => ({repos})

const Owner = ({repos}) => {
  if (repos.length) {
    return (
      <div className="owner-block">
        <h3 className="owner-login"><a href={repos[0].owner.html_url}>{repos[0].owner.login}</a></h3>
        <img
          className="owner-picture"
          width="70"
          height="70"
          src={repos[0].owner.avatar_url}/>
      </div>
    )
  } else {
    return (
      <div className="owner-block">
        <h3>Автор не выбран</h3>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Owner)
