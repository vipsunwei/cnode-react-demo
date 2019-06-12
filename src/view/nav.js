import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Menu, Icon } from 'antd'

class Nav extends Component {
  render () {
    let { mode, className, location } = this.props
    let now = location.pathname.split('/')[1]
    return (
      <Menu selectedKeys={ [now] } mode={ mode } theme="light" className={ className }>
        <Menu.Item key="index">
          <Link to="/index/all"><Icon type="home" />首页</Link>
        </Menu.Item>
        <Menu.Item key="book">
          <Link to="/book"><Icon type="book" />教程</Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link to="/about"><Icon type="info-circle" />关于</Link>
        </Menu.Item>
      </Menu>
    )
  }
}

export default withRouter(Nav)
