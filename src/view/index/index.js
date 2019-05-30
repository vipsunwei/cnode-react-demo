import React, { Component } from 'react'
import { Row, Col } from 'antd';
import IndexMenu from './indexMenu'
import './index.css'

class Index extends Component {
  render () {
    return (
      <Row className="mainWrap">
        <Col md={6} xs={0}>
          <IndexMenu mode="vertical" className="indexMenu" />
        </Col>
        <Col md={0} xs={24}>
          <IndexMenu mode="horizontal" />
        </Col>
        <Col md={18}>
          {}
        </Col>
      </Row>

    )
  }
}
export default Index
