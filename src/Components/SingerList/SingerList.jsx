import React, { Component } from 'react';
import './singer-list.css'
import SingerCover from '../Cover/SingerCover/SingerCover'

class SingerList extends Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    return (
      <div className='singer-list'>
        <SingerCover />
      </div>
    );
  }
}

export default SingerList;