import { IObservableValue, makeAutoObservable, observable } from "mobx";
import { createContext } from "react";

export class GiverStore {
  public count = observable.box(0); // use an observable box

  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.count.set(this.count.get() + 1);
  }

  decrement() {
    this.count.set(this.count.get() - 1);
  }
}

export const GiverStoreContext = createContext<GiverStore | null>(null);
GiverStoreContext.displayName = "GiverStoreContext";

export class ReceiverStore {
  public count: IObservableValue<number>;

  constructor(count: IObservableValue<number>) {
    this.count = count;

    makeAutoObservable(this);
  }

  public increment() {
    this.count.set(this.count.get() + 1);
  }

  public decrement() {
    this.count.set(this.count.get() - 1);
  }
}
