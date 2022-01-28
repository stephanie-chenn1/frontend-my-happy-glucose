import "./App.css";
import NavList from "./components/NavList";
import HomeBox from "./components/HomeBox";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="bg-info col-4">
          <NavList />
        </div>
        <div className="col-8">
          <HomeBox />
        </div>
      </div>
    </div>
  );
}

export default App;
