import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="sidebar-container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:id" element={<User />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
