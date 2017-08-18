const router = require('express').Router()
const gitHubApi = require('../model/github')

router.get('/issues', async (req, res) => {
  try {
    console.log(req.query)
    const {data, params} = req.query
    const issues = await gitHubApi.getIssues(data, params)
    res.json(issues)
  } catch (err) {
    console.log(err)
  }
})

router.get('/repos', async (req, res) => {
  try {
    const {owner, page} = req.query
    const repos = await gitHubApi.getRepos(owner, page)
    res.json(repos)
  } catch (error) {
    if (error.code === 404) res.status(404).send({error: 'Not Found'})
    else res.json(error)
  }
})

module.exports = router
