import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Home />
      </div>
    </Provider>
  );
}

export default App;
