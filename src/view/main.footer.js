import React, { Component } from 'react'
import { Layout } from 'antd'
import './main.footer.css'

class MainFooter extends Component {
  render () {
    return (
      <Layout.Footer className="footer">
        <a href="https://github.com/vipsunwei/cnode-react-demo" target="_blank">github</a>
      </Layout.Footer>
    )
  }
}

export default MainFooter
