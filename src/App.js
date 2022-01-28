import "./App.css";
import NavList from "./components/NavList";
import HomeBox from "./components/HomeBox";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4 no-float">
          <NavList />
        </div>
        <div className="col-8 no-float">
          <HomeBox />
        </div>
      </div>
    </div>
  );
}

export default App;
