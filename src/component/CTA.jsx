const CTA = () => {
  return (
    <section className="py-5 bg-dark text-white position-relative">
      <div className="container text-center">

        <div className="p-5 rounded-4 shadow-lg bg-black bg-opacity-75">

          <h2 className="fw-bold display-5">
            Take Control of Your Money Today 💰
          </h2>

          <p className="mt-3 text-light opacity-75 fs-5">
            Track income, manage expenses, and grow your savings smarter than ever.
          </p>

          {/* Buttons */}
          <div className="mt-4 d-flex justify-content-center flex-wrap gap-3">
            <a href="/register" className="btn btn-warning btn-lg px-5 rounded-pill fw-semibold shadow">
              🚀 Get Started Free
            </a>

            <a href="/dashboard" className="btn btn-outline-light btn-lg px-5 rounded-pill">
              View Demo
            </a>
          </div>

          {/* Trust Line */}
          <div className="mt-4 small text-secondary">
            ✔ No Credit Card Required &nbsp; | &nbsp; 
            ✔ 100% Secure &nbsp; | &nbsp; 
            ✔ Free Forever Plan
          </div>

        </div>

      </div>
    </section>
  );
};

export default CTA;