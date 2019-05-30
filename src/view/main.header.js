import React, { Component } from 'react'
import { Layout, Row, Col, Divider, Dropdown, Icon, Button } from 'antd'
import Nav from './nav'
import './main.header.css'

class MainHeader extends Component {
  render () {
    return (
      <Layout.Header>
        <Row>
          <Col md={6} xs={24} className="logo">cNode</Col>
          <Col md={18} xs={0}>
            <Divider type="vertical" className="headerDivider" />
            <Nav mode="horizontal" className="navMenu" />
          </Col>
          <Col md={0} xs={24} className="xsNavMenu">
            <Dropdown overlay={ <Nav mode="vertical" className="" /> } trigger={ ['hover', 'touchend'] } placement="bottomRight" >
              <Button><Icon type="bars" /></Button>
            </Dropdown>
          </Col>
        </Row>
      </Layout.Header>
    )
  }
}

export default MainHeader
