import { observer, useLocalObservable } from "mobx-react-lite";
import { GiverStore, GiverStoreContext, ReceiverStore } from "./stores";
import { useRequiredContext } from "./useRequiredContext";

const App = observer(function App() {
  const giverStore = useLocalObservable(() => new GiverStore());

  return (
    <div>
      <p>in GiverStore: {giverStore.count.get()}</p>
      <GiverStoreContext.Provider value={giverStore}>
        <Receiver />
      </GiverStoreContext.Provider>
    </div>
  );
});

const Receiver = observer(function Receiver() {
  const giverStore = useRequiredContext(GiverStoreContext);
  const receiverStore = useLocalObservable(
    () => new ReceiverStore(giverStore.count)
  );

  return (
    <div>
      <p>in ReceiverStore: {receiverStore.count.get()}</p>
      <button onClick={() => receiverStore.increment()}>+</button>
      <button onClick={() => receiverStore.decrement()}>-</button>
    </div>
  );
});

export default App;
