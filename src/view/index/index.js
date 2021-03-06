import React, { Component } from 'react'
import { Row, Col } from 'antd';
import PropTypes from 'prop-types'
import IndexMenu from './indexMenu'
import IndexList from './indexList'
import './index.css'

class Index extends Component {
  static propTypes = {
    loading: PropTypes.bool,
    match: PropTypes.object.isRequired
  }

  render () {
    const tab = this.props.match.params.id
    return (
      <Row className="mainWrap">
        <Col md={4} xs={0}>
          <IndexMenu mode="vertical" className="indexMenu" />
        </Col>
        <Col md={0} xs={24}>
          <IndexMenu mode="horizontal" className="indexXsMenu" />
        </Col>
        <Col md={20} className="indexList">
          <IndexList
            loading={ this.props.loading }
            tab={ tab }
          />
        </Col>
      </Row>
    )
  }
}
export default Index
