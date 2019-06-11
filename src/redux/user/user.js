import defaultState from './defaultState'
function user (state = defaultState, action) {
  switch (action.type) {
    case 'UPDATE_USER':
      return {
        loading: action.data.loading,
        data: action.data.data
      }
    case 'UPDATE_USER_SUCCESS':
      return {
        loading: action.data.loading,
        data: action.data.data
      }
    case 'UPDATE_USER_ERROR':
      return {
        loading: action.data.loading,
        data: action.data.data
      }
    default:
      return state
  }
}

export default user
