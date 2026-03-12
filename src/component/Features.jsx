const Features = () => {
  return (
    <section
      className="py-5 text-white"
      style={{
        background:
          "linear-gradient(135deg, #5f2c82 0%, #49a09d 50%, #6a11cb 100%)",
      }}
    >
      <div className="container py-5">

        {/* Header */}
        <div className="text-center mb-5">
          <span className="badge bg-light text-dark px-4 py-2 rounded-pill mb-3 fw-semibold">
            🚀 Next-Level Finance Tools
          </span>

          <h2 className="fw-bold display-4 mb-3">
            Designed For <span className="text-warning">Modern Wealth Builders</span>
          </h2>

          <p className="fs-5 opacity-75 col-lg-7 mx-auto">
            Powerful features crafted to simplify money management,
            maximize growth and deliver unmatched financial clarity.
          </p>
        </div>

        {/* Features Grid */}
        <div className="row g-4">

          {[
            {
              icon: "bi-graph-up-arrow",
              title: "Smart Income Tracking",
              text: "Monitor multiple income streams with real-time performance insights.",
            },
            {
              icon: "bi-wallet2",
              title: "Advanced Expense Control",
              text: "Categorize and optimize your spending intelligently.",
            },
            {
              icon: "bi-bar-chart-line",
              title: "AI-Powered Analytics",
              text: "Visual dashboards with predictive financial insights.",
            },
            {
              icon: "bi-shield-lock",
              title: "Bank-Level Security",
              text: "Enterprise-grade encryption protecting your financial data.",
            },
            {
              icon: "bi-pie-chart",
              title: "Interactive Reports",
              text: "Monthly & yearly breakdowns with beautiful charts.",
            },
            {
              icon: "bi-lightning-charge",
              title: "Real-Time Sync",
              text: "Instant updates across all your financial activities.",
            },
          ].map((feature, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div
                className="p-4 h-100 rounded-4 shadow-lg text-center"
                style={{
                  background: "rgba(255,255,255,0.12)",
                  backdropFilter: "blur(15px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  transition: "0.4s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-10px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <div
                  className="bg-light text-dark rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
                  style={{ width: "80px", height: "80px" }}
                >
                  <i className={`bi ${feature.icon} fs-2`}></i>
                </div>

                <h5 className="fw-bold fs-4 mb-3">
                  {feature.title}
                </h5>

                <p className="opacity-75">
                  {feature.text}
                </p>

                <div className="mt-3">
                  <span className="fw-semibold text-warning">
                    Explore →
                  </span>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Features;