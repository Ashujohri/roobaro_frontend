import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../App.css";
import Login from "./UserLogin/UserLoginForm";

export default function AdminRouter(props) {
  return (
    <Router>
      <Routes>
        <Route element={<Login />} path="/Login" />
        <Route element={<Login />} path="/" />
      </Routes>
    </Router>
  );
}
