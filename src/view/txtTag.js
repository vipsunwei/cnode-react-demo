import React, { Component } from 'react'
import { Tag } from 'antd'

const tab = {
  top: {
    txt: '置顶',
    color: 'magenta'
  },
  good: {
    txt: '精华',
    color: 'geekblue'
  },
  job: {
    txt: '招聘',
    color: 'cyan'
  },
  share: {
    txt: '分享',
    color: 'purple'
  },
  ask: {
    txt: '问答',
    color: 'green'
  },
  dev: {
    txt: '测试',
    color: 'lime'
  }
}

function getTab (data) {
  return data.top ? 'top' : data.good ? 'good' : data.tab
}
class TxtTag extends Component {
  render () {
    let { color = '', txt = '' } = tab[ getTab(this.props.data) ] || {}
    return (
      <Tag color={ color }>{ txt }</Tag>
    )
  }
}

export default TxtTag
