import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, Avatar } from 'antd'
import TxtTag from '../txtTag'

class TxtDetails extends Component {
  render () {
    let { loading, data } = this.props
    const title = (
      !loading ? (
        <div>
          <h1 className="title" title={ data.title }>{ data.title }</h1>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <TxtTag data={ data } />
            <Link to={ '/user/' + data.author.loginname }>
              <Avatar src={ data.author.avatar_url } />
            </Link>
            <Link to={ '/user/' + data.author.loginname }>
              { data.author.loginname }
            </Link>发表于:{ data.create_at && data.create_at.split('T')[0] }
          </div>
        </div>
      ) : ''
    )
    return (
      <Card loading={ loading } title={ title } type='inner'>
        <div dangerouslySetInnerHTML={{ __html: data && data.content }}></div>
      </Card>
    )
  }
}

export default TxtDetails
