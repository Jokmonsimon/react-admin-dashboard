import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <div className="sidebar-container">
        <Sidebar />
        <div className="others">Other pages</div>
      </div>
    </div>
  );
}

export default App;
