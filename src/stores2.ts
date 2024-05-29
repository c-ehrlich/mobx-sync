import { makeAutoObservable } from "mobx";

export class WrapperStore {
  obj = { count: 0 };

  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.obj.count++;
  }

  decrement() {
    this.obj.count--;
  }
}

export class ReceiverStore1 {
  wrapperStore: WrapperStore;

  constructor(wrapperStore: WrapperStore) {
    this.wrapperStore = wrapperStore;
    makeAutoObservable(this);
  }

  increment() {
    this.wrapperStore.obj.count++;
  }

  decrement() {
    this.wrapperStore.obj.count--;
  }
}

export class ReceiverStore2 {
  wrapperStore: WrapperStore;

  constructor(wrapperStore: WrapperStore) {
    this.wrapperStore = wrapperStore;
    makeAutoObservable(this);
  }

  increment() {
    this.wrapperStore.obj.count++;
  }

  decrement() {
    this.wrapperStore.obj.count--;
  }
}
