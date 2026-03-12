import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/auth");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-gradient shadow-lg py-3">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand fw-bold fs-4 d-flex align-items-center gap-2" to="/">
          <span className="bg-warning text-dark px-2 py-1 rounded-3 fw-bold">
            ET
          </span>
          ExpenseTracker
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">

            {!token ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link fw-semibold" to="/">
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="btn btn-warning rounded-pill px-4 fw-semibold shadow-sm"
                    to="/auth"
                  >
                    Login / Register
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link fw-semibold" to="/dashboard">
                    Dashboard
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link fw-semibold" to="/income">
                    Income
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link fw-semibold" to="/expense">
                    Expense
                  </Link>
                </li>

                <li className="nav-item">
                  <button
                    className="btn btn-danger rounded-pill px-4 fw-semibold shadow-sm"
                    onClick={handleLogout}
                  >
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