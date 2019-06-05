import React, { Component } from 'react'
import { Avatar, Row, Col, List } from 'antd';
import UserList from './userList';
import data from './data'
import './user.css'

class User extends Component {
  constructor () {
    super()
    this.state = {
      data: {},
      loading: true
    }
    this.getData(1000)
  }
  getData (t) {
    setTimeout(() => {
      this.setState({ loading: false, data: data })
    }, t)
  }
  render () {
    console.log(data)
    return !this.state.loading ? (
      <div className='mainWrap'>
        <Avatar src={data.data.avatar_url} className='userAvatar' />
        <Row className='userInfo'>
          <Col md={8}>
            用户名:<a>{ this.state.data.data.loginname }</a>
          </Col>
          <Col md={8}>
            积分:<a>{ this.state.data.data.score }</a>
          </Col>
          <Col md={8}>
            注册时间:<a>{ this.state.data.data.create_at.split('T')[0] }</a>
          </Col>
        </Row>
        <UserList
          title='最近创建的话题'
          loading={ this.state.loading }
          data={ this.state.data.data.recent_topics }
        />
        <UserList
          title='最近回复的话题'
          loading={ this.state.loading }
          data={ this.state.data.data.recent_replies }
        />
      </div>
    ) : (<List loading={ this.state.loading }></List>)
  }
}
export default User
