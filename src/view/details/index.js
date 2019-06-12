import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchGet } from './../../tool/fetch'
import { baseUrl, topic } from './../../api'
import TxtDetails from './txtDetails'
import ReplyList from './replyList'
import './details.css'

class Details extends Component {
  constructor (props) {
    super(props)
    let id = this.props.match.params.id
    this.getData(id)
  }
  shouldComponentUpdate (nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      console.log(nextProps.match.params.id, this.props.match.params.id)
      this.getData(nextProps.match.params.id)
      return false
    }
    return true
  }
  getData (id) {
    this.props.dispatch(dispatch => {
      dispatch({
        type: 'UPDATE_DETAILS',
        payload: {
          loading: true
        }
      })
      let url = baseUrl + topic + '/' + id
      let params = {
        mdrender: false
      }
      fetchGet(url, params).then(response => response.json()).then(result => {
        result.success && dispatch({
          type: 'UPDATE_DETAILS_SUCCESS',
          payload: {
            loading: false,
            data: result.data
          }
        })
      }).catch(error => {
        console.warn(error)
        dispatch({
          type: 'UPDATE_DETAILS_ERROR',
          payload: {
            loading: false
          }
        })
      })
    })
  }
  render () {
    let { loading, data } = this.props
    return (
      <div className="mainWrap">
        <TxtDetails loading={ loading } data={ data } />
        <ReplyList loading={ loading } replyCount={ data.reply_count } replies={ data.replies } />
      </div>
    )
  }
}
export default connect(state => state.details)(Details)
