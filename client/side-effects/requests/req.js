import req from 'superagent'

export const getIssues = (data, params) => (
  new Promise((resolve, reject) => {
    req.get('/api/github/issues')
      .query({data, params})
      .end((err, res) => {
        if (err) reject(err)

        console.log(res)
        resolve(res.body)
      })
  })
)

export const getRepos = (name, page) => (
  new Promise((resolve, reject) => {
    req.get('/api/github/repos')
      .query({owner: name, page})
      .end((err, res) => {
        if (err) reject(err)

        console.log(res)

        resolve(res.body)
      })
  })
)
