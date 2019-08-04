import { UPDATE_USER_ERROR, UPDATE_USER_SUCCESS, UPDATE_USER } from './../action-types/user-types'
import { fetchGet } from './../../tool/fetch'
import { compareFn } from '../../tool/sort'
import { baseUrl, user } from './../../api'

export const updateUser = (payload) => ({ type: UPDATE_USER, payload })

export const updateUserSuccess = (payload) => ({ type: UPDATE_USER_SUCCESS, payload })

export const updateUserError = (payload) => ({ type: UPDATE_USER_ERROR, payload })

export const getUserInfo = (id) => {
  return dispatch => {
    dispatch(updateUser({ loading: true }))
    let url = baseUrl + user + '/' + id
    fetchGet(url).then(response => response.json()).then(result => {
      if (result.success) {
        result.data.recent_topics.sort(compareFn({ propertyName: 'last_reply_at' }))
        result.data.recent_replies.sort(compareFn({ propertyName: 'last_reply_at' }))
        dispatch(updateUserSuccess({
          loading: false,
          data: result.data
        }))
      }
    }).catch(error => {
      console.warn(error)
      dispatch(updateUserError({ loading: false }))
    })
  }
}
