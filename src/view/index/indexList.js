import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List, Skeleton, Avatar } from 'antd'
import TxtTag from './../txtTag'
import { connect } from 'react-redux'
import { getTopicList } from './../../redux/actions/list-actions'

class IndexList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      current: 1
    }
    this.getData(this.props.tab)
  }
  shouldComponentUpdate (nextProps) {
    if (nextProps.tab !== this.props.tab) {
      this.getData(nextProps.tab)
      this.setState({
        current: 1
      })
      return false
    }
    return true
  }
  getData (tab) {
    this.props.getTopicList(tab)
  }
  render () {
    let { data, loading } = this.props
    let pagination = !loading ? {
      hideOnSinglePage: true,
      current: this.state.current,
      pageSize: 9,
      total: data.length,
      onChange: current => this.setState({ current }),
      defaultCurrent: 1,
      showLessItems: true,
      size: 'small'
    } : false
    return (
      <List
        pagination={ pagination }
        loading={ loading }
        dataSource={ data }
        renderItem={item => (
          <List.Item
            actions={ !loading ? [
              '回复:' + item.reply_count,
              '访问:' + item.visit_count
            ] : [] }>
            <Skeleton loading={ loading } active avatar paragraph={{ rows: 1 }}>
              <List.Item.Meta
                avatar={
                  <Link to={ `/user/${item.author.loginname}` }>
                    <Avatar src={ item.author.avatar_url } />
                  </Link>}
                title={
                  <div className="title">
                    <TxtTag data={ item } />
                    <Link to={ '/details/' + item.id } title={ item.title }>{ item.title }</Link>
                  </div>
                }
                description={
                  <div>
                    <Link to={ '/user/' + item.author.loginname }>
                      { item.author.loginname }
                    </Link>发表于:{ item.create_at.split('T')[0] }
                  </div>
                } />
            </Skeleton>
          </List.Item>
        )}>
      </List>
    )
  }
}

export default connect(
  state => state.list,
  { getTopicList }
)(IndexList)
