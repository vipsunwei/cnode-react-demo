import React, { Component } from 'react'
import { Row, Col, List } from 'antd';
import IndexMenu from './indexMenu'
import IndexList from './indexList'
import data from './data';
import './index.css'

class Index extends Component {
  constructor () {
    super()
    this.state = {
      loading: true,
      data: {}
    }
    this.getData(1000)
  }
  getData (t) {
    setTimeout(() => {
      this.setState({ loading: false, data: data })
    }, t)
  }
  render () {
    console.log(this.props)
    return (
      <Row className="mainWrap">
        <Col md={6} xs={0}>
          <IndexMenu mode="vertical" className="indexMenu" />
        </Col>
        <Col md={0} xs={24}>
          <IndexMenu mode="horizontal" />
        </Col>
        <Col md={18} className="indexList">
          { !this.state.loading ? (
            <IndexList
              loading={ this.state.loading }
              data={ this.state.data }
            />) : (<List loading={ this.state.loading }></List>) }
        </Col>
      </Row>
    )
  }
}
export default Index
