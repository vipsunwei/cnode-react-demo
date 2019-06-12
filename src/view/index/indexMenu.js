import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import { Menu } from 'antd'

class IndexMenu extends Component {
  render () {
    let { mode, className, location } = this.props
    let now = location.pathname.split('/')[2]
    return (
      <Menu selectedKeys={ [now] } mode={ mode } className={ className }>
        <Menu.Item key='all'>
          <Link to="/index/all">全部</Link>
        </Menu.Item>
        <Menu.Item key='good'>
          <Link to="/index/good">精华</Link>
        </Menu.Item>
        <Menu.Item key='ask'>
          <Link to="/index/ask">问答</Link>
        </Menu.Item>
        <Menu.Item key='share'>
          <Link to="/index/share">分享</Link>
        </Menu.Item>
        <Menu.Item key='job'>
          <Link to="/index/job">招聘</Link>
        </Menu.Item>
        <Menu.Item key='dev'>
          <Link to="/index/dev">测试</Link>
        </Menu.Item>
      </Menu>
    )
  }
}

export default withRouter(IndexMenu)
