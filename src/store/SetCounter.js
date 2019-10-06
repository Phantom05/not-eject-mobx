import { observable, action} from 'mobx';

export default class SetCounter{
  @observable setNumber = 0;

  constructor(root){
    this.root = root;
  }

  @action handleChangeSetNumber =(value) =>{
    // console.log('f');
    // const {value} = e.target;
    this.setNumber = +value;
    // console.log(value,'handleChangeSetNumber');
    // console.log(this.setNumber,'this.setNumber');
  }
}