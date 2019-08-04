import { UPDATE_DETAILS, UPDATE_DETAILS_SUCCESS, UPDATE_DETAILS_ERROR } from './../action-types/details-types'
import { fetchGet } from './../../tool/fetch'
import { compareFn } from './../../tool/sort'
import { baseUrl, topic } from './../../api'

export const updateDetails = (payload) => ({ type: UPDATE_DETAILS, payload })

export const updateDetailsSuccess = (payload) => ({ type: UPDATE_DETAILS_SUCCESS, payload })

export const updateDetailsError = (payload) => ({ type: UPDATE_DETAILS_ERROR, payload })

export const getTopicDetails = (id) => {
  return dispatch => {
    dispatch(updateDetails({ loading: true }))
    let url = baseUrl + topic + '/' + id
    let params = {
      mdrender: 'true'
    }
    fetchGet(url, params).then(response => response.json()).then(result => {
      if (result.success) {
        result.data.replies.sort(compareFn({ propertyName: 'create_at' }))
        dispatch(updateDetailsSuccess({
          loading: false,
          data: result.data
        }))
      }
    }).catch(error => {
      console.warn(error)
      dispatch(updateDetailsError({ loading: false }))
    })
  }
}
