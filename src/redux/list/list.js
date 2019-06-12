import defaultState from './defaultState'
function list (state = defaultState, action) {
  switch (action.type) {
    case 'UPDATE_LIST':
      let data = state.data.slice(0, 7)
      return {
        loading: action.payload.loading,
        data
      }
    case 'UPDATE_LIST_SUCCESS':
      return {
        loading: action.payload.loading,
        data: action.payload.data
      }
    case 'UPDATE_LIST_ERROR':
      return {
        loading: action.payload.loading,
        data: defaultState.data
      }
    default:
      return state
  }
}

export default list
