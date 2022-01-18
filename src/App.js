import logo from "./logo.svg";
import { Provider } from "react-redux";
import store from "./redux/store";
import Header from "./components/molecules/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { getPhotos } from "./redux/photo/photoActions";
import "./App.css";

function App() {
  // store.subscribe(() => {
  //   console.log(store.getState());
  // });
  // store.dispatch(getPhotos());
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Header /> */}
        <Home />
        {/* <About /> */}
        {/* <Contact /> */}
      </div>
    </Provider>
  );
}

export default App;
