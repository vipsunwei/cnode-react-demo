import defaultState from './defaultState'
function user (state = defaultState, action) {
  switch (action.type) {
    case 'UPDATE_USER':
      return {
        loading: action.payload.loading,
        data: state.data
      }
    case 'UPDATE_USER_SUCCESS':
      return {
        loading: action.payload.loading,
        data: action.payload.data
      }
    case 'UPDATE_USER_ERROR':
      return {
        loading: action.payload.loading,
        data: defaultState.data
      }
    default:
      return state
  }
}

export default user
