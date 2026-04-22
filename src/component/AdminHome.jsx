import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminHome() {
  const [data, setData] = useState({});
  const token = localStorage.getItem("token");

  useEffect(() => {
   axios.get("http://localhost:8989/admin/stats", {
  headers: { Authorization: "Bearer " + token }
})
    .then(res => setData(res.data.data))
    .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ marginBottom: "20px" }}>Admin Dashboard 📊</h2>

      <div style={container}>
        <Card title="Total Users" value={data.users} color="#4CAF50" />
        <Card title="Total Income" value={`₹ ${data.income}`} color="#2196F3" />
        <Card title="Total Expense" value={`₹ ${data.expense}`} color="#f44336" />
      </div>
    </div>
  );
}

// 🔥 CARD COMPONENT
const Card = ({ title, value, color }) => (
  <div style={{ ...cardStyle, borderLeft: `5px solid ${color}` }}>
    <h4 style={{ marginBottom: "10px", color: "#555" }}>{title}</h4>
    <h2 style={{ color }}>{value || 0}</h2>
  </div>
);

// 🔥 STYLES
const container = {
  display: "flex",
  gap: "20px",
  flexWrap: "wrap"
};

const cardStyle = {
  background: "#fff",
  padding: "20px",
  borderRadius: "10px",
  width: "220px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  transition: "0.3s"
};