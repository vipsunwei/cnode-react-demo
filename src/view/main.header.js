import React, { Component } from 'react'
import { Layout, Row, Col, Divider, Dropdown, Button } from 'antd'
import { BarsOutlined } from '@ant-design/icons'
import Nav from './nav'
import './main.header.css'

class MainHeader extends Component {
  render () {
    return (
      <Layout.Header>
        <Row>
          <Col md={4} xs={24} className="logo">cNode</Col>
          <Col md={20} xs={0}>
            <Divider type="vertical" className="headerDivider" />
            <Nav mode="horizontal" className="navMenu" />
          </Col>
          <Col md={0} xs={24} className="xsNavMenu">
            <Dropdown overlay={ <Nav mode="vertical" className="xsNavMenu" /> } trigger={ ['hover', 'click'] } placement="bottomRight" >
              <Button><BarsOutlined /></Button>
            </Dropdown>
          </Col>
        </Row>
      </Layout.Header>
    )
  }
}

export default MainHeader
