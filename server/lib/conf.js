const GitHubApi = require('github')

const github = new GitHubApi({
  debug: false,
  protocol: 'https',
  host: 'api.github.com',
  headers: {
    'user-agent': 'gaarson'
  },
  Promise: require('bluebird'),
  followRedirects: false,
  timeout: 5000
})

//github.authenticate({
  //type: 'token',
  //token: '73bff1530f5c74e35cef9693f8abba6fedc3546a'
//})

module.exports = github
