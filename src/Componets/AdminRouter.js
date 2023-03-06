import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../App.css";
import AddVisitorFullpage from "./AddVisitor/AddVisitorFullpage";
import NewLogin from "./UserLogin/Login";
import RecoverPassword from "./ForgotPass/RecoverPassword";
import CreatePassword from "./ForgotPass/CreatePassword";
import EntryMode from "./Dashboard/EntryMode";
import MobileNumber from "./Mobileverification/MobileNumber";
import OTP from "./Mobileverification/Otp";
import FieldVisitor from "./FieldVisitor/InterVisitorDetail";

export default function AdminRouter(props) {
  return (
    <Router>
      <Routes>
        <Route element={<NewLogin />} path="/Login" />
        <Route element={<NewLogin />} path="/" />
        <Route element={<RecoverPassword />} path="/recoverpassword" />
        <Route element={<CreatePassword />} path="/cretepasword" />
        <Route element={<AddVisitorFullpage />} path="/Addvisitor" />
        <Route element={<EntryMode />} path="/Dashboard" />
        <Route element={<MobileNumber />} path="/MobileNumber" />
        <Route element={<OTP />} path="/OTP" />
        <Route element={<FieldVisitor />} path="/FieldVisit" />
      </Routes>
    </Router>
  );
}
