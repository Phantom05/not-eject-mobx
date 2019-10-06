import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from '@emotion/styled'

const Styled ={
  Button:styled.button`
    display:inline-block;
    border:0;
    padding:5px 15px;
    border-radius:5px;
    cursor: pointer;
    &:hover{
      opacity:0.9;
    }
  `,
}
class Hello extends Component {
  handleIncrease = () =>{
    this.props.increase(this.props.setNumber)
  }
  render() {
    const { number,increase ,count, setNumber} = this.props;
    return (
      <div>
        Hello React {count}
        <div>
        <Styled.Button  onClick={this.handleIncrease}>
          +{setNumber}
          
        </Styled.Button>

        </div>
      </div>
    );
  }
}

export default inject(({ counter,setCounter }) => ({
  count:counter.count,
  increase:counter.increase,
  setNumber:setCounter.setNumber
}))(observer(Hello));