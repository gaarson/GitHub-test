export const inputState = (state = {params: {
  page: 0,
  per_page: 10,
  state: 'all'
}}, action) => {
  switch (action.type) {
    case 'CHANGE_INPUT':
      console.log(action)
      return Object.assign({}, state, {name: action.event.value})
    case 'CHANGE_PARAMS':
      let params = state.params
      action.event.id ? params[action.event.id] = action.event.value
        : params.page = action.event.selected
      console.log(params)
      return Object.assign({}, state, params)
    default: return state || {}
  }
}

export const issues = (state = [], action) => {
  switch (action.type) {
    case 'ISSUES_PENDING':
      return state
    case 'ISSUES_SUCCESS':
      console.log('action_issues_pending', action)
      return action.data.data
    default: return state || []
  }
}

export const repos = (state = [], action) => {
  switch (action.type) {
    case 'REPOS_SUCCESS':
      console.log('action_repos_Success', action)
      return action.data.data
    default: return state || []
  }
}

export const loader = (state, action) => {
  switch (action.type) {
    case 'REPOS_PENDING':
      console.log(action)
      action.history && action.history.push(`/${action.data}`)
      return state
    case 'ISSUES_PENDING':
      return state
    default: return state || 0
  }
}

export const error = (state = '', action) => {
  switch (action.type) {
    case 'REPOS_ERROR':
      console.log('error_repos', action.error)
      return action.error
    case 'ISSUES_ERROR':
      console.log('error', action.error)
      return action.error
    default: return state || ''
  }
}
