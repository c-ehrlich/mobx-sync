import { observer, useLocalObservable } from "mobx-react-lite";
import { ReceiverStore1, ReceiverStore2, WrapperStore } from "./stores2";

export const App2 = observer(function App2() {
  const wrapperStore = useLocalObservable(() => new WrapperStore());
  const receiverStore1 = useLocalObservable(
    () => new ReceiverStore1(wrapperStore)
  );
  const receiverStore2 = useLocalObservable(
    () => new ReceiverStore2(wrapperStore)
  );

  return (
    <div>
      <div>
        <p>in WrapperStore: {wrapperStore.obj.count}</p>
        <button onClick={() => wrapperStore.increment()}>+</button>
        <button onClick={() => wrapperStore.decrement()}>-</button>
      </div>

      <div>
        <p>in ReceiverStore1: {receiverStore1.wrapperStore.obj.count}</p>
        <button onClick={() => receiverStore1.increment()}>+</button>
        <button onClick={() => receiverStore1.decrement()}>-</button>
      </div>

      <div>
        <p>in ReceiverStore2: {receiverStore2.wrapperStore.obj.count}</p>
        <button onClick={() => receiverStore2.increment()}>+</button>
        <button onClick={() => receiverStore2.decrement()}>-</button>
      </div>
    </div>
  );
});
