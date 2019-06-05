import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List, Card, Avatar } from 'antd';

class ReplyList extends Component {
  render () {
    let { replies, replyCount } = this.props
    console.log(this.props)
    return (
      <Card title={ replyCount + '条回复' } type='inner'>
        <List
          itemLayout='vertical'
          dataSource={ replies }
          renderItem={item => (
            <List.Item
              key={ item.id }
              extra={ item.ups.length ? <span>赞{ item.ups.length }</span> : '' }
            >
              <List.Item.Meta
                avatar={ <Avatar src={ item.author.avatar_url } /> }
                description={
                  <div>
                    <Link to={'/user/' + item.author.loginname}>
                      { item.author.loginname }
                    </Link>发表于:{item.create_at.split('T')[0]}
                  </div>
                }
              />
              <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
            </List.Item>
          )}
        ></List>
      </Card>
    )
  }
}

export default ReplyList
