import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const [showDemo, setShowDemo] = useState(false);

  return (
    <section
      className="min-vh-100 d-flex align-items-center"
      style={{
        background:
          "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #6B73FF 100%)",
      }}
    >
      <div className="container py-5 text-white">

        {!showDemo ? (

          <div className="row align-items-center">

            {/* LEFT */}
            <div className="col-lg-6">

              <h1 className="display-3 fw-bold mb-4">
                Next-Gen Finance <br />
                <span className="text-warning">For Smart People</span>
              </h1>

              <p className="lead opacity-75">
                Experience powerful income & expense tracking
                with modern dashboards built for growth.
              </p>

              <div className="d-flex gap-3 mt-4">

                <button
                  onClick={() => navigate("/auth")}
                  className="btn btn-light btn-lg rounded-pill px-4 fw-semibold shadow"
                >
                  Start Free
                </button>

                <button
                  onClick={() => setShowDemo(true)}
                  className="btn btn-outline-light btn-lg rounded-pill px-4"
                >
                  Live Demo
                </button>

              </div>

              <div className="mt-4 small opacity-75">
                ✔ AI Analytics &nbsp;
                ✔ Bank-Level Security &nbsp;
                ✔ Real-Time Insights
              </div>

            </div>

            {/* RIGHT */}
            <div className="col-lg-6 mt-5 mt-lg-0">

              <div className="card border-0 shadow-lg rounded-4 p-4 bg-white text-dark">

                <div className="d-flex justify-content-between mb-4">
                  <h6 className="fw-bold">Monthly Performance</h6>
                  <span className="badge bg-success">+24%</span>
                </div>

                <div className="row text-center g-3">

                  <div className="col-6">
                    <div className="bg-success bg-opacity-10 p-3 rounded-4">
                      <p className="text-muted mb-1">Income</p>
                      <h4 className="text-success fw-bold">₹1,10,000</h4>
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="bg-danger bg-opacity-10 p-3 rounded-4">
                      <p className="text-muted mb-1">Expense</p>
                      <h4 className="text-danger fw-bold">₹55,000</h4>
                    </div>
                  </div>

                </div>

                <div className="progress mt-4" style={{ height: "8px" }}>
                  <div
                    className="progress-bar bg-primary"
                    style={{ width: "68%" }}
                  ></div>
                </div>

                <p className="small text-muted mt-2">
                  68% savings efficiency
                </p>

              </div>

            </div>

          </div>

        ) : (

          /* ================= DEMO ================= */

          <div>

            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="fw-bold text-white">Live Demo Dashboard</h2>
              <button
                onClick={() => setShowDemo(false)}
                className="btn btn-light rounded-pill"
              >
                ← Back
              </button>
            </div>

            <div className="row g-4">

              <div className="col-md-4">
                <div className="card shadow border-0 rounded-4 text-center p-4">
                  <h6 className="text-muted">Total Income</h6>
                  <h3 className="text-success fw-bold">₹1,80,000</h3>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card shadow border-0 rounded-4 text-center p-4">
                  <h6 className="text-muted">Total Expense</h6>
                  <h3 className="text-danger fw-bold">₹90,000</h3>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card shadow border-0 rounded-4 text-center p-4">
                  <h6 className="text-muted">Net Balance</h6>
                  <h3 className="text-primary fw-bold">₹90,000</h3>
                </div>
              </div>

            </div>

          </div>

        )}

      </div>
    </section>
  );
};

export default Hero;