const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">

          {/* About Section */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold text-warning">FinTrack</h5>
            <p className="small">
              FinTrack helps you manage your income and expenses easily.
              Track spending, monitor growth, and stay financially organized.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold text-warning">Quick Links</h6>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-light text-decoration-none">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="/add-income" className="text-light text-decoration-none">
                  Add Income
                </a>
              </li>
              <li>
                <a href="/add-expense" className="text-light text-decoration-none">
                  Add Expense
                </a>
              </li>
              <li>
                <a href="/reports" className="text-light text-decoration-none">
                  View Reports
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold text-warning">Contact</h6>
            <p className="small mb-1">
              📧 bhumikanagar24@gmail.com
            </p>
            <p className="small mb-1">
              📞 +91 6268783949
            </p>

            {/* Social Icons */}
            <div className="mt-3">
              <a href="#" className="text-light me-3 fs-5">
                <i className="bi bi-github"></i>
              </a>
              <a href="#" className="text-light me-3 fs-5">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" className="text-light fs-5">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>

        </div>

        <hr className="border-secondary" />

        {/* Bottom Copyright */}
        <div className="text-center small">
          © {new Date().getFullYear()} FinTrack | All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;