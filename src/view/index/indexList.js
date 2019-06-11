import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List, Skeleton, Avatar } from 'antd'
import TxtTag from './../txtTag'
import { connect } from 'react-redux'
import { fetchGet } from './../../tool/fetch'
import { baseUrl, topics } from './../../api'

class IndexList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      page: 1
    }
    this.getData(this.props.tab)
  }
  shouldComponentUpdate (nextProps) {
    if (nextProps.tab !== this.props.tab) {
      this.getData(nextProps.tab)
      return false
    }
    return true
  }
  getData (tab) {
    console.log(tab)
    let params = {
      page: this.state.page,
      tab,
      limit: 10,
      mdrender: false
    }
    let url = baseUrl + topics
    this.props.dispatch(dispatch => {
      dispatch({
        type: 'UPDATE_LIST',
        data: {
          loading: true
        }
      })
      fetchGet(url, params).then(response => response.json()).then(result => {
        result.success && dispatch({
          type: 'UPDATE_LIST_SUCCESS',
          data: {
            data: result.data,
            loading: false
          }
        })
      }).catch(error => {
        console.warn(error)
        dispatch({
          type: 'UPDATE_LIST_ERROR',
          data: {
            loading: false
          }
        })
      })
    })
  }
  render () {
    let { data, loading } = this.props
    return (
      <List
        loading={loading}
        dataSource={data}
        renderItem={item => (
          <List.Item
            actions={[
              '回复:' + item.reply_count,
              '访问:' + item.visit_count
            ]}>
            <Skeleton loading={loading} active avatar paragraph={{ rows: 1 }}>
              <List.Item.Meta
                avatar={
                  <Link to={`/user/${item.author.loginname}`}>
                    <Avatar src={item.author.avatar_url} />
                  </Link>}
                title={
                  <div>
                    <TxtTag data={item} />
                    <Link to={'/details/' + item.id}>{item.title}</Link>
                  </div>
                }
                description={
                  <div>
                    <Link to={'/user/' + item.author.loginname}>
                      {item.author.loginname}
                    </Link>发表于:{item.create_at.split('T')[0]}
                  </div>
                } />
            </Skeleton>
          </List.Item>
        )}>
      </List>
    )
  }
}

export default connect(state => state.list)(IndexList)
