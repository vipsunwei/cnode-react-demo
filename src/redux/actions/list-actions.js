import { UPDATE_LIST, UPDATE_LIST_SUCCESS, UPDATE_LIST_ERROR } from './../action-types/list-types'
import { baseUrl, topics } from './../../api'
import { fetchGet } from './../../tool/fetch'
import { compareFn } from './../../tool/sort'

export const updateList = (payload) => ({ type: UPDATE_LIST, payload })

export const updateListSuccess = (payload) => ({ type: UPDATE_LIST_SUCCESS, payload })

export const updateListError = (payload) => ({ type: UPDATE_LIST_ERROR, payload })

export const getTopicList = (tab) => {
  return dispatch => {
    let params = {
      tab,
      mdrender: 'true'
    }
    let url = baseUrl + topics
    dispatch(updateList({ loading: true }))
    fetchGet(url, params).then(response => response.json()).then(result => {
      result.success && dispatch(updateListSuccess({
        data: result.data.sort(compareFn({ priority: 'top', propertyName: 'create_at' })),
        loading: false
      }))
    }).catch(error => {
      console.warn(error)
      dispatch(updateListError({ loading: false }))
    })
  }
}
