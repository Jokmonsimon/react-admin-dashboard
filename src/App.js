import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import UserList from "./pages/userList/UserList";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="sidebar-container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="users" element={<UserList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
