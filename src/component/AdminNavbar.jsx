import { Link, useLocation, useNavigate } from "react-router-dom";

export default function AdminNavbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const menu = [
    { name: "Dashboard", path: "/admin" },
    { name: "Users", path: "/admin/users" },
    { name: "Income", path: "/admin/income" },
    { name: "Expense", path: "/admin/expense" }
  ];

  // 🔥 LOGOUT FUNCTION
  const handleLogout = () => {
    localStorage.clear(); // sab hata dega (token, role, etc)
    navigate("/login");   // login page pe bhej de
  };

  return (
    <div style={nav}>
      <h2 style={{ color: "#fff" }}>👑 Admin Panel</h2>

      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        
        {menu.map((item, i) => (
          <Link
            key={i}
            to={item.path}
            style={{
              ...link,
              borderBottom:
                location.pathname === item.path
                  ? "2px solid #FFD700"
                  : "none"
            }}
          >
            {item.name}
          </Link>
        ))}

        {/* 🔥 LOGOUT BUTTON */}
        <button onClick={handleLogout} style={logoutBtn}>
          Logout 🚪
        </button>

      </div>
    </div>
  );
}

//////////////////// STYLES ////////////////////

const nav = {
  background: "#1e1e2f",
  padding: "15px 30px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

const link = {
  color: "#fff",
  textDecoration: "none",
  fontWeight: "500",
  paddingBottom: "5px"
};

const logoutBtn = {
  background: "#f44336",
  border: "none",
  padding: "8px 15px",
  color: "#fff",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "500"
};