import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import Product from "./pages/product/Product";

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
          <Route path="/addNewUser" element={<NewUser />} />
          <Route path="/products" element={<Product />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
