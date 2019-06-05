import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, Avatar } from 'antd'
import TxtTag from '../txtTag'

class TxtDetails extends Component {
  render () {
    let { data } = this.props
    console.log(this.props)
    const title = (
      <div>
        <h1>{data.data && data.data.title}</h1>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <TxtTag data={data.data} />
          <Link to={'/user/' + data.data && data.data.author && data.data.author.loginname}>
            <Avatar src={data.data && data.data.author && data.data.author.avatar_url} />
          </Link>
          <Link to={'/user/' + data.data && data.data.author && data.data.author.loginname}>
            {data.data && data.data.author && data.data.author.loginname}
          </Link>发表于:{data.data && data.data.create_at.split('T')[0]}
        </div>
      </div>
    )
    return (
      <Card title={ title }>
        <div dangerouslySetInnerHTML={{ __html: data.data && data.data.content }}></div>
      </Card>
    )
  }
}

export default TxtDetails
