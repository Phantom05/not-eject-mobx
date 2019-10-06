import Counter from './Counter';
import SetCounter from './SetCounter';

class RootStore{
  constructor(){
    this.counter = new Counter(this);
    this.setCounter =new SetCounter(this);
  }
}

export default RootStore;