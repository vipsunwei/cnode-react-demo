import defaultState from './defaultState'
function list (state = defaultState, action) {
  switch (action.type) {
    case 'UPDATE_LIST_SUCCESS':
      return {
        loading: action.data.loading,
        data: action.data.data
      }
    case 'UPDATE_LIST_ERROR':
      return {
        loading: action.data.loading,
        data: action.data.data
      }
    default:
      return state
  }
}

export default list
