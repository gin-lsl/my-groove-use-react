import React, { Component } from 'react';
import './tab.css'
import { TabHeader, TabBody } from './'

class Tab extends Component {
  constructor(props) {
    super(props)
    this.tabHeaders = props.tabs.map(_tab => _tab.title)
    // this.tabBodys = props.tabs.map(TabBodyContent => (
    //   <TabBodyContent.children/>
    // ))
  }
  
  render() {
    return (
      <div>
        <TabHeader tabHeaders={this.tabHeaders} />
        {/*<TabBody tabBodys={this.tabBodys} />*/}
        {this.props.children}
      </div>
    );
  }
}

export default Tab