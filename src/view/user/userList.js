import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, List, Avatar } from 'antd'

class UserList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      current: 1
    }
  }
  render () {
    let { title, loading, data } = this.props
    let pagination = {
      defaultCurrent: 1,
      current: this.state.current,
      hideOnSinglePage: true,
      pageSize: 3,
      onChange: current => this.setState({ current }),
      total: data.length,
      showLessItems: true,
      size: 'small'
    }
    return (
      <Card
        title={ title }
        loading={ loading }
        type='inner'
      >
        <List
          pagination={ pagination }
          dataSource={ data }
          renderItem={item => (
            <List.Item
              key={ item.id }
              extra={ <span className="userInfoLastReply">{ '最后回复:' + item.last_reply_at.split('T')[0] }</span> }
            >
              <List.Item.Meta
                avatar={ <Avatar src={ item.author.avatar_url } /> }
                title={ <Link to={ '/details/' + item.id } title={ item.title }>{ item.title }</Link> }
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
