import React, { Component } from 'react';

class TabHeader extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const _idx = this.props.activeIndex
    return (
      <div className='tab-header'>
        {this.props.tabHeaders.map((title, idx) => (
          <div className={idx == _idx ? 'tab-header-title active' : 'tab-header-title'}
            key={idx}
            onClick={() => { this.props.onActiveChange(idx) }}>{title}</div>
        ))}
      </div>
    );
  }
}

export default TabHeader