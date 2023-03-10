import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../App.css";
import NewLogin from "./UserLogin/Login";
import Dashboard from "./Dashboard/Dashboard";
import NewVisitorOffice from "./Mobileverification/NewVisitorOffice";
import AddVisitorForm from "./AddVisitor/AddVisitorForm";
import ShowVisitors from "./ShowVisitors/ShowVisitors";

export default function AdminRouter(props) {
  return (
    <Router>
      <Routes>
        <Route element={<NewLogin />} path="/Login" />
        <Route element={<NewLogin />} path="/" />
        <Route element={<Dashboard />} path="/Dashboard" />
        <Route element={<NewVisitorOffice />} path="/NewVisitorOffice" />
        <Route element={<AddVisitorForm />} path="/AddVisitorForm" />
        <Route element={<ShowVisitors />} path="/ShowVisitors" />
      </Routes>
    </Router>
  );
}
