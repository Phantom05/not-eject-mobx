import React, { Component } from 'react';
import {inject, observer} from 'mobx-react';

class World extends Component {
  handleChange = (e) =>{
    const {value} = e.target
    this.props.handleChangeSetNumber(value)
  }
  render() {
    const {setNumber,handleChangeSetNumber} = this.props;
    return (
      <div>
        Mobx Set Count
        <div>
          <input value={setNumber} onChange={this.handleChange} />
        </div>
      </div>
    );
  }
}

export default inject(({setCounter})=>({
  setNumber:setCounter.setNumber,
  handleChangeSetNumber:setCounter.handleChangeSetNumber
}))(observer(World)) ;