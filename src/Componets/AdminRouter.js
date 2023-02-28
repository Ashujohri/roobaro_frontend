import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../App.css";
import Login from "./UserLogin/UserLoginFullPage";
import AddVisitor from "./AddVisitor/AddVisitorFullpage";
const linksarray = ["New Visit", "Show Visit", "Profile"];

export default function AdminRouter(props) {
  return (
    <Router>
      <Routes>
        <Route element={<Login links={linksarray} />} path="/Login" />
        <Route element={<Login links={linksarray} />} path="/" />
        <Route
          element={<AddVisitor links={linksarray} />}
          path="/Addvisitors"
        />
      </Routes>
    </Router>
  );
}
