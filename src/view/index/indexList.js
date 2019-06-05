import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List, Skeleton, Avatar } from 'antd'
import TxtTag from './../txtTag'

class IndexList extends Component {
  render () {
    let { data, loading } = this.props
    console.log(this.props)
    return (
      <List
        loading={loading}
        dataSource={data.data}
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

export default IndexList
