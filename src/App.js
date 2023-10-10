import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="a-body">
        <Home />
      </div>
    </div>
  );
}

export default App;
