import React, { Component } from 'react'
import { List } from 'antd'
import TxtDetails from './txtDetails'
import ReplyList from './replyList';
import data from './data'

class Details extends Component {
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
    return !this.state.loading ? (
      <div className="mainWrap">
        <TxtDetails data={ this.state.data } />
        <ReplyList replyCount={ this.state.data.data.reply_count } replies={ this.state.data.data.replies } />
      </div>
    ) : (<List loading={ this.state.loading }></List>)
  }
}
export default Details
