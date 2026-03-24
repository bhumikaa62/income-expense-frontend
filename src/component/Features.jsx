const Features = () => {
  const features = [
    {
      icon: "bi-graph-up-arrow",
      title: "Smart Income Tracking",
      text: "Track all your income streams with real-time insights and better financial visibility.",
    },
    {
      icon: "bi-wallet2",
      title: "Expense Management",
      text: "Control your spending with categorized tracking and smart budgeting tools.",
    },
    {
      icon: "bi-bar-chart-line",
      title: "Advanced Analytics",
      text: "Understand your financial data with modern charts and detailed insights.",
    },
    {
      icon: "bi-shield-lock",
      title: "Secure Platform",
      text: "Your financial data is protected with high-level encryption and security.",
    },
    {
      icon: "bi-pie-chart",
      title: "Reports & Insights",
      text: "Generate monthly and yearly reports to monitor your growth.",
    },
    {
      icon: "bi-lightning-charge",
      title: "Real-time Sync",
      text: "Stay updated instantly with fast and reliable real-time syncing.",
    },
  ];

  return (
    <section
      className="py-5"
      style={{
        background: "linear-gradient(to right, #eef2f3, #ffffff)",
      }}
    >
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5 text-dark">
            Powerful Features
          </h2>
          <p className="text-muted col-md-7 mx-auto mt-3 fs-5">
            Everything you need to manage, track and grow your finances in one modern platform.
          </p>
        </div>

        {/* Cards */}
        <div className="row g-4">

          {features.map((item, index) => (
            <div className="col-md-6 col-lg-4" key={index}>

              <div
                className="card h-100 border-0 shadow"
                style={{
                  borderRadius: "15px",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 15px 30px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow =
                    "0 5px 15px rgba(0,0,0,0.1)";
                }}
              >
                <div className="card-body text-center p-4">

                  {/* Icon */}
                  <div
                    className="d-flex align-items-center justify-content-center mx-auto mb-3 rounded-circle"
                    style={{
                      width: "70px",
                      height: "70px",
                      background: "linear-gradient(135deg,#0d6efd,#4facfe)",
                      color: "#fff",
                    }}
                  >
                    <i className={`bi ${item.icon} fs-3`}></i>
                  </div>

                  {/* Title */}
                  <h5 className="fw-bold mt-3 text-dark">
                    {item.title}
                  </h5>

                  {/* Text */}
                  <p className="text-muted mt-2" style={{ fontSize: "15px" }}>
                    {item.text}
                  </p>

                  {/* CTA */}
                  <div className="mt-3">
                    <span
                      className="text-primary fw-semibold"
                      style={{ cursor: "pointer" }}
                    >
                      Learn More →
                    </span>
                  </div>

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