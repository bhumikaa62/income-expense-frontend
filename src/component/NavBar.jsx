import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role"); // ✅ ADD

  const handleLogout = () => {
    localStorage.clear(); // ✅ better
    navigate("/auth");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-gradient shadow-lg py-3">
      <div className="container">

        <Link className="navbar-brand fw-bold fs-4 d-flex align-items-center gap-2" to="/">
          <span className="bg-warning text-dark px-2 py-1 rounded-3 fw-bold">
            ET
          </span>
          ExpenseTracker
        </Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">

            {!token ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>

                <li className="nav-item">
                  <Link className="btn btn-warning" to="/auth">
                    Login / Register
                  </Link>
                </li>
              </>
            ) : role === "admin" ? (
              // 🔥 ADMIN NAVBAR
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/users">Users</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/admin/income">Income</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/admin/expense">Expense</Link>
                </li>

                <li className="nav-item">
                  <button className="btn btn-danger" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </>
            ) : (
              // 🔥 USER NAVBAR
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">Dashboard</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/income">Income</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/expense">Expense</Link>
                </li>

                <li className="nav-item">
                  <button className="btn btn-danger" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </>
            )}

          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;