import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Menu } from 'antd'
import {
  HomeOutlined,
  BookOutlined,
  InfoCircleOutlined
} from '@ant-design/icons'

class Nav extends Component {
  static propTypes = {
    mode: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    location: PropTypes.object.isRequired
  }

  render () {
    const { mode, className, location } = this.props
    const now = location.pathname.split('/')[1]

    return (
      <Menu
        selectedKeys={[now]}
        mode={mode}
        theme="light"
        className={className}
      >
        <Menu.Item key="index">
          <Link to="/index/all">
            <HomeOutlined />
            首页
          </Link>
        </Menu.Item>
        <Menu.Item key="book">
          <Link to="/book">
            {/* <Icon type="book" /> */}
            <BookOutlined />
            教程
          </Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link to="/about">
            {/* <Icon type="info-circle" /> */}
            <InfoCircleOutlined />
            关于
          </Link>
        </Menu.Item>
      </Menu>
    )
  }
}

export default withRouter(Nav)
