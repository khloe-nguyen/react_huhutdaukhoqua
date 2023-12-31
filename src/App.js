import "./App.css";
import Header from "./components/Header";
import Product from "./components/Product";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Product />
      </div>
    </div>
  );
}

export default App;
