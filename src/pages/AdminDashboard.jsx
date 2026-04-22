import { Routes, Route } from "react-router-dom";
import AdminNavbar from "../component/AdminNavbar";
import AdminUsers from "../component/AdminUsers";
import AdminIncome from "../component/AdminIncome";
import AdminExpense from "../component/AdminExpense";
import AdminHome from "../component/AdminHome";

export default function AdminDashboard() {
  return (
    <div style={{ background: "#f5f7fb", minHeight: "100vh" }}>

      {/* 🔥 TOP NAVBAR */}
      <AdminNavbar />

      {/* 🔥 MAIN CONTENT */}
      <div style={{ padding: "30px" }}>
        <Routes>

          <Route path="/" element={<AdminHome />} />

          <Route path="users" element={<AdminUsers />} />
          <Route path="income" element={<AdminIncome />} />
          <Route path="expense" element={<AdminExpense />} />

        </Routes>
      </div>

    </div>
  );
}