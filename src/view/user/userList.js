import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, List, Avatar } from 'antd'

class UserList extends Component {
  render () {
    let { title, loading, data } = this.props
    return (
      <Card
        title={ title }
        loading={ loading }
        type='inner'
      >
        <List
          dataSource={ data }
          renderItem={item => (
            <List.Item
              key={ item.id }
              extra={ '最后回复:' + item.last_reply_at.split('T')[0] }
            >
              <List.Item.Meta
                avatar={ <Avatar src={ item.author.avatar_url } /> }
                title={ <Link to={'/details/' + item.id}>{ item.title }</Link> }
                description={ <Link to={ '/user/' + item.author.loginname }>{ item.author.loginname }</Link> }
              />
            </List.Item>
          )}
        ></List>
      </Card>
    )
  }
}

export default UserList
