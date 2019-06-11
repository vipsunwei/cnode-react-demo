import { combineReducers } from 'redux'
import list from './list/list'
import details from './details/details'
import user from './user/user'

let reducer = combineReducers({
  list,
  details,
  user
})

export default reducer
