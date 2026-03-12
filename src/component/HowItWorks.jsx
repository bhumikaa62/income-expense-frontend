const HowItWorks = () => {
  const cardStyle = {
    background: "rgba(255, 215, 0, 0.05)",
    border: "1px solid rgba(255, 215, 0, 0.3)",
    backdropFilter: "blur(10px)",
    transition: "all 0.4s ease",
    cursor: "pointer"
  };

  return (
    <section
      className="py-5 text-white position-relative"
      style={{
        background: "linear-gradient(135deg, #000000, #0f0f0f, #1a1a1a)",
        overflow: "hidden"
      }}
    >
      <div className="container text-center py-5">

        <h2
          className="fw-bold display-4 mb-3"
          style={{
            background: "linear-gradient(90deg,#FFD700,#fff,#FFD700)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          How It Works
        </h2>

        <p className="text-light opacity-75 mb-5 fs-5">
          Manage your finances in 3 powerful premium steps
        </p>

        <div className="row g-4">

          {[
            {
              number: "01",
              icon: "bi-person-plus",
              title: "Create Account",
              text: "Securely register and unlock your elite financial dashboard."
            },
            {
              number: "02",
              icon: "bi-cash-stack",
              title: "Add Transactions",
              text: "Track income & expenses with smart categorization."
            },
            {
              number: "03",
              icon: "bi-bar-chart-line",
              title: "Analyze Growth",
              text: "View insights and accelerate your wealth journey."
            }
          ].map((step, index) => (
            <div className="col-md-4" key={index}>
              <div
                className="p-5 rounded-4 h-100 text-center shadow-lg"
                style={cardStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "perspective(1000px) rotateX(5deg) rotateY(5deg) translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(255,215,0,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow =
                    "0 10px 25px rgba(0,0,0,0.4)";
                }}
              >
                {/* Step Number */}
                <div
                  className="fw-bold mb-3"
                  style={{
                    fontSize: "3rem",
                    color: "rgba(255,215,0,0.2)"
                  }}
                >
                  {step.number}
                </div>

                {/* Icon */}
                <div
                  className="mb-4"
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform =
                      "rotate(360deg) scale(1.2)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "none")
                  }
                  style={{
                    transition: "0.6s ease",
                    display: "inline-block",
                    color: "#FFD700"
                  }}
                >
                  <i className={`bi ${step.icon} fs-1`}></i>
                </div>

                <h4
                  className="fw-bold mb-3"
                  style={{
                    color: "#FFD700",
                    letterSpacing: "1px"
                  }}
                >
                  {step.title}
                </h4>

                <p className="text-light opacity-75">
                  {step.text}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;