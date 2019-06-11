import defaultState from './defaultState'
function details (state = defaultState, action) {
  switch (action.type) {
    case 'UPDATE_DETAILS':
      return {
        loading: action.data.loading,
        data: state.data
      }
    case 'UPDATE_DETAILS_SUCCESS':
      return {
        loading: action.data.loading,
        data: action.data.data
      }
    case 'UPDATE_DETAILS_ERROR':
      console.log('default state: ', defaultState)
      return {
        loading: action.data.loading,
        data: defaultState.data
      }
    default:
      return state
  }
}

export default details
