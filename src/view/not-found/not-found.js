import React from 'react'
import { Row, Col, Button } from 'antd';

import './not-found.less'

export default class NotFound extends React.Component {
  render () {
    return (
      <Row>
        <Col span={8} className="not-found-image">
        </Col>
        <Col span={16} className="not-found-text">
          <h1>404</h1>
          <h2>抱歉，你访问的页面不存在</h2>
          <div>
            <Button type="primary" onClick={ () => this.props.history.replace('/') }>回到首页</Button>
          </div>
        </Col>
      </Row>
    )
  }
}
