export const input = {
  change: (event) => ({type: 'CHANGE_INPUT', event}),
  params: (event) => ({type: 'CHANGE_PARAMS', event})
}

export const getIssues = {
  pending: (data, params) => ({type: 'ISSUES_PENDING', data, params}),
  success: (data) => ({type: 'ISSUES_SUCCESS', data}),
  error: (error) => ({type: 'ISSUES_ERROR', error})
}

export const getRepos = {
  pending: (data, history, page) => ({type: 'REPOS_PENDING', data, history, page}),
  success: (data) => ({type: 'REPOS_SUCCESS', data}),
  error: (error) => ({type: 'REPOS_ERROR', error})
}
