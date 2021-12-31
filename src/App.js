import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <div>
      <Header />
      <div className="sidebar-container">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
