import React, { Component } from 'react'
import { Avatar, Row, Col } from 'antd';
import { connect } from 'react-redux'
import UserList from './userList';
import { fetchGet } from './../../tool/fetch'
import { baseUrl, user } from './../../api'
import './user.css'

class User extends Component {
  constructor (props) {
    super(props)
    this.getData(this.props.match.params.id)
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
        type: 'UPDATE_USER',
        payload: {
          loading: true
        }
      })
      let url = baseUrl + user + '/' + id
      fetchGet(url).then(response => response.json()).then(result => {
        result.success && dispatch({
          type: 'UPDATE_USER_SUCCESS',
          payload: {
            loading: false,
            data: result.data
          }
        })
      }).catch(error => {
        console.warn(error)
        dispatch({
          type: 'UPDATE_USER_ERROR',
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
      <div className='mainWrap'>
        <Avatar src={data.avatar_url} className='userAvatar' />
        <Row className='userInfo'>
          <Col md={8}>
            用户名:<span className="userInfoItem">{ data.loginname }</span>
          </Col>
          <Col md={8}>
            积分:<span className="userInfoItem">{ data.score }</span>
          </Col>
          <Col md={8}>
            注册时间:<span className="userInfoItem">{ data.create_at && data.create_at.split('T')[0] }</span>
          </Col>
        </Row>
        <UserList
          title='最近创建的话题'
          loading={ loading }
          data={ data.recent_topics }
        />
        <UserList
          title='最近回复的话题'
          loading={ loading }
          data={ data.recent_replies }
        />
      </div>
    )
  }
}
export default connect(state => state.user)(User)
