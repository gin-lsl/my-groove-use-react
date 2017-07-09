import React, { Component } from 'react';
import './singer-cover.css'
import Cover from '../Cover'

class SingerCover extends Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    return (
      <div className='singer-cover'>
        <Cover isCircle={true} size={140} />
        <div className="singer-name">3L</div>
      </div>
    );
    
  }
}

export default SingerCover;