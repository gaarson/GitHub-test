const github = require('../lib/conf')

exports.getIssues = async (data, params) => (
  new Promise((resolve, reject) => {
    console.log('params', params)
    github.issues.getForRepo({
      owner: data.user,
      repo: data.repo,
      state: params.state,
      per_page: params.per_page,
      page: +params.page + 1
    }, (err, res, body) => {
      if (err) reject(err)

      resolve(res)
    })
  })
)

exports.getRepos = async (name, page) => (
  new Promise((resolve, reject) => {
    github.repos.getForUser({
      username: name,
      type: 'all',
      per_page: 10,
      page: +page + 1
    }, (err, res) => {
      if (err) reject(err)

      resolve(res)
    })
  })
)
