import { Provider } from "react-redux";
import { Counter } from "./components/Counter";
import ShoppingCart from "./components/ShoppingCart";

import TeoriaRedux from "./components/TeoriaRedux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div style={{ textAlign: "center" }}>
        <h1>Redux</h1>
        <ShoppingCart />
        <hr />
        <Counter />
        <hr />
        <TeoriaRedux />
      </div>
    </Provider>
  );
}

export default App;
