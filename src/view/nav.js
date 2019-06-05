import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'antd'

class Nav extends Component {
  render () {
    let { mode, className } = this.props
    console.log(className, mode)
    return (
      <Menu mode={ mode } theme="light" className={ className }>
        <Menu.Item>
          <Link to="/index/all"><Icon type="home" />首页</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/book"><Icon type="book" />教程</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/about"><Icon type="info-circle" />关于</Link>
        </Menu.Item>
      </Menu>
    )
  }
}

export default Nav
