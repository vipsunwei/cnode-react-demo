import defaultState from './defaultState'
function details (state = defaultState, action) {
  switch (action.type) {
    case 'UPDATE_DETAILS':
      return {
        loading: action.payload.loading,
        data: state.data
      }
    case 'UPDATE_DETAILS_SUCCESS':
      return {
        loading: action.payload.loading,
        data: action.payload.data
      }
    case 'UPDATE_DETAILS_ERROR':
      return {
        loading: action.payload.loading,
        data: defaultState.data
      }
    default:
      return state
  }
}

export default details
