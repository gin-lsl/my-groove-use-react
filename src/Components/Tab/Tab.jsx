import React, { Component } from 'react';
import './tab.css'
import { TabHeader, TabBody } from './'

class Tab extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: 0
    }
    this.handleActiveChange = this.handleActiveChange.bind(this)
    this.tabHeaders = props.tabs.map(_tab => _tab.title)
    // this.tabBodys = props.tabs.map(TabBodyContent => (
    //   <TabBodyContent.children/>
    // ))
  }

  handleActiveChange(index) {
    console.log('点击: ' + index)
    this.setState({
      active: index
    })
  }

  render() {
    return (
      <div className='tab'>
        <TabHeader tabHeaders={this.tabHeaders}
          onActiveChange={this.handleActiveChange}
          activeIndex={this.state.active} />
        <TabBody>
          {this.props.children[this.state.active]}
        </TabBody>
      </div>
    );
  }
}

export default Tab