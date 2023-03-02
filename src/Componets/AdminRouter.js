import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../App.css";
import Login from "./UserLogin/UserLoginFullPage";
import AddVisitorFullpage from "./AddVisitor/AddVisitorFullpage";
import MobileVerify from "./Mobileverification/MobileVerificationFullPage";
const linksarray = ["New Visit", "Show Visit", "Profile"];

export default function AdminRouter(props) {
  return (
    <Router>
      <Routes>
        <Route element={<Login links={linksarray} />} path="/Login" />
        <Route element={<Login links={linksarray} />} path="/" />
        <Route element={<MobileVerify links={linksarray} />} path="/MobileVerify" />
        <Route
          element={<AddVisitorFullpage links={linksarray} />}
          path="/Addvisitor"
        />
      </Routes>
    </Router>
  );
}
