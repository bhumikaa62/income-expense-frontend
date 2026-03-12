import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Income() {
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");

  const [amount, setAmount] = useState("");
  const [sourceId, setSourceId] = useState("");
  const [incomeList, setIncomeList] = useState([]);
  const [categories, setCategories] = useState([]);

  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();

  const fetchCategories = async () => {
    const res = await fetch("http://localhost:8989/income-category/list", {
      headers: { "authorization": token }
    });
    const data = await res.json();
    if (data.status) setCategories(data.data);
  };

  const fetchIncomeList = async () => {
    const res = await fetch(`http://localhost:8989/income/listincome/12/${userId}`, {
      headers: { "authorization": token }
    });
    const data = await res.json();
    if (data.status) setIncomeList(data.data);
  };

  useEffect(() => {
    fetchCategories();
    fetchIncomeList();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!sourceId || !amount) return alert("All fields required");

    const res = await fetch("http://localhost:8989/income/add", {
      method: "POST",
      headers: { "Content-Type": "application/json", "authorization": token },
      body: JSON.stringify({
        user_id: Number(userId),
        source_id: Number(sourceId),
        amount: Number(amount),
        month,
        year
      })
    });

    const data = await res.json();

    if (data.status) {
      setIncomeList(prev => [data.data, ...prev]);
      setAmount("");
      setSourceId("");
    } else {
      alert("Income add failed: " + data.message);
    }
  };

  return (
    <div
      className="min-vh-100 py-5"
      style={{
        background: "linear-gradient(135deg,#0f2027,#203a43,#2c5364)"
      }}
    >
      <div className="container">

        <div className="text-center mb-5 text-white">
          <h1 className="fw-bold display-5">💰 Add Income</h1>
          <p className="opacity-75">Track and manage your earnings easily</p>
        </div>

        {/* Form Card */}
        <div className="card border-0 shadow-lg rounded-4 mb-5">
          <div className="card-body p-5">

            <form onSubmit={handleSubmit}>
              <div className="row g-4">
                <div className="col-md-6">
                  <label className="form-label fw-bold">Amount</label>
                  <div className="input-group input-group-lg">
                    <span className="input-group-text bg-success text-white">₹</span>
                    <input
                      type="number"
                      className="form-control border-success"
                      value={amount}
                      onChange={e => setAmount(e.target.value)}
                      placeholder="Enter amount"
                      required
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-bold">Income Source</label>
                  <select
                    className="form-select form-select-lg border-primary"
                    value={sourceId}
                    onChange={e => setSourceId(e.target.value)}
                    required
                  >
                    <option value="">Select Source</option>
                    {categories.map(c => (
                      <option key={c.id} value={c.id}>
                        {c.income_source_name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-12">
                  <button
                    type="submit"
                    className="btn btn-success btn-lg w-100 rounded-pill shadow"
                  >
                    🚀 Add Income
                  </button>
                </div>
              </div>
            </form>

          </div>
        </div>

        {/* Income List */}
        <div className="text-white mb-4">
          <h3 className="fw-bold">Recent Incomes</h3>
        </div>

        <div className="row g-4">
          {incomeList.map(i => (
            <div key={i.id} className="col-md-6 col-lg-4">
              <div
                className="card border-0 shadow-lg rounded-4 h-100 text-white"
                style={{
                  background: "linear-gradient(135deg,#11998e,#38ef7d)",
                  transition: "0.4s"
                }}
              >
                <div className="card-body">
                  <h4 className="fw-bold">₹ {i.amount}</h4>
                  <p className="mb-1">
                    <strong>Source:</strong>{" "}
                    {categories.find(c => c.id === i.source_id)?.income_source_name || i.source_id}
                  </p>
                  <small>
                    {new Date(i.date).toLocaleDateString()}
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Income;