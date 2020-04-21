import { combineReducers } from 'redux'
import reports from './reports'
import loader from './loader'

export default combineReducers({
    reports,
    loader
})