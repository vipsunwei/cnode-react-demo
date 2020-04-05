import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List, Card, Avatar } from 'antd';
import PropTypes from 'prop-types'

class ReplyList extends Component {
  static propTypes = {
    loading: PropTypes.bool,
    replies: PropTypes.array,
    replyCount: PropTypes.number
  }

  constructor (props) {
    super(props)
    this.state = {
      current: 1
    }
  }

  render () {
    const { loading, replies, replyCount } = this.props
    const title = !replyCount || loading ? '' : `${replyCount}条回复`
    const pagination = {
      defaultCurrent: 1,
      current: this.state.current,
      pageSize: 3,
      onChange: current => this.setState({ current }),
      total: replies.length,
      hideOnSinglePage: true,
      size: 'small',
      showLessItems: true
    }
    return (
      <Card loading={ loading } title={ title } type='inner'>
        <List
          pagination={ pagination }
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
                    <Link to={ '/user/' + item.author.loginname }>
                      { item.author.loginname }
                    </Link>发表于:{ item.create_at.split('T')[0] }
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
