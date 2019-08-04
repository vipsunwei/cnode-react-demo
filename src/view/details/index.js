import React, { Component } from 'react'
import { connect } from 'react-redux'
import TxtDetails from './txtDetails'
import ReplyList from './replyList'
import { getTopicDetails } from './../../redux/actions/details-actions'

class Details extends Component {
  constructor (props) {
    super(props)
    let id = this.props.match.params.id
    this.getData(id)
  }
  shouldComponentUpdate (nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      console.log(nextProps.match.params.id, this.props.match.params.id)
      this.getData(nextProps.match.params.id)
      return false
    }
    return true
  }
  getData (id) {
    this.props.getTopicDetails(id)
  }
  render () {
    let { loading, data } = this.props
    return (
      <div className="mainWrap">
        <TxtDetails loading={ loading } data={ data } />
        <ReplyList loading={ loading } replyCount={ data.reply_count } replies={ data.replies } />
      </div>
    )
  }
}
export default connect(
  state => state.details,
  { getTopicDetails }
)(Details)
