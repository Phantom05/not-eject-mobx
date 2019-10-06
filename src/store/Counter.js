import { observable, action } from 'mobx';

export default class TestStore{
  @observable count = 0;
  
  constructor(root){
    this.root = root;
  }

  @action increase = (num) =>{
    this.count += num;
    // if(num){
    //   this.count += num;
    // }else{
    //   this.count++;
    // }
  }

}