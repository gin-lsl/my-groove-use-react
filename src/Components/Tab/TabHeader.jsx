import React, { Component } from 'react';

class TabHeader extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div>
        {this.props.tabHeaders.map((title, idx) => (
          <div key={idx}>{title}</div>
        ))}
      </div>
    );
  }
}

export default TabHeader