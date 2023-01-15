import "./App.css";
import NavBar from "./Component/NavBar/NavBar";
import Layout from "./Component/NavBar/MainPage/Layout";
import LoginHome from "./Component/LoginHome/LoginHome";

function App() {
  return (
    <div className="App">
      {localStorage.getItem("user") == undefined ? (
        <LoginHome />
      ) : (
        <span>
          <NavBar /> <Layout />
        </span>
      )}
    </div>
  );
}

export default App;
