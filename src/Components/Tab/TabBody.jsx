import React, { Component } from 'react';

class TabBody extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    // const MyMusic = this.props.tabBodys[0]
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default TabBody