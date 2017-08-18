import { getIssues, getRepos } from '../actions/action'
import * as req from './requests/req'
import { takeLatest } from 'redux-saga'
import { fork, call, put } from 'redux-saga/effects'

function * fetchGetIssues ({data, params}) {
  try {
    console.log('params', params)
    const issues = yield call(req.getIssues, data, params)
    yield put(getIssues.success(issues))
  } catch (error) {
    yield put(getIssues.error(error))
  }
}

function * fetchGetRepos ({data, page}) {
  try {
    console.log('data', data)
    const issues = yield call(req.getRepos, data, page)
    yield put(getRepos.success(issues))
  } catch (error) {
    yield put(getRepos.error(error))
  }
}

function * watchFetchGetIssues () {
  yield * takeLatest('ISSUES_PENDING', fetchGetIssues)
}

function * watchFetchGetRepos () {
  yield * takeLatest('REPOS_PENDING', fetchGetRepos)
}

export default function * forks () {
  yield [
    fork(watchFetchGetIssues),
    fork(watchFetchGetRepos)
  ]
}
