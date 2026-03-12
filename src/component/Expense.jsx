import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Expense() {
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");

  const [amount, setAmount] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [mode, setMode] = useState("Cash");
  const [expenseList, setExpenseList] = useState([]);
  const [categories, setCategories] = useState([]);

  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();

  const fetchCategories = async () => {
    const res = await fetch("http://localhost:8989/expense-category/list", {
      headers: { "authorization": token }
    });
    const data = await res.json();
    if (data.status) setCategories(data.data);
  };

  const fetchExpenseList = async () => {
    const res = await fetch("http://localhost:8989/expense/list", {
      method: "POST",
      headers: { "Content-Type": "application/json", "authorization": token },
      body: JSON.stringify({ user_id: userId })
    });
    const data = await res.json();
    if (data.status) setExpenseList(data.data);
  };

  useEffect(() => {
    fetchCategories();
    fetchExpenseList();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!categoryId) return alert("Select Category");

    const res = await fetch("http://localhost:8989/expense/add", {
      method: "POST",
      headers: { "Content-Type": "application/json", "authorization": token },
      body: JSON.stringify({ user_id: Number(userId), category_id: Number(categoryId), amount: Number(amount), mode, month, year })
    });
    const data = await res.json();
    if(data.status){
      setAmount(""); setCategoryId(""); setMode("Cash");
      fetchExpenseList();
    } else {
      alert("Expense add failed: " + data.message);
    }
  };

  return (
    <div
      className="min-vh-100 py-5"
      style={{
        background: "linear-gradient(135deg,#232526,#414345)"
      }}
    >
      <div className="container">

        {/* Header */}
        <div className="text-center text-white mb-5">
          <h1 className="fw-bold display-5">💳 Add Expense</h1>
          <p className="opacity-75">Manage and track your spending smartly</p>
        </div>

        {/* Form Card */}
        <div className="card border-0 shadow-lg rounded-4 mb-5">
          <div className="card-body p-5">

            <form onSubmit={handleSubmit}>
              <div className="row g-4">

                <div className="col-md-6">
                  <label className="form-label fw-bold">Amount</label>
                  <div className="input-group input-group-lg">
                    <span className="input-group-text bg-danger text-white">₹</span>
                    <input
                      type="number"
                      className="form-control border-danger"
                      value={amount}
                      onChange={e => setAmount(e.target.value)}
                      placeholder="Enter amount"
                      required
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-bold">Mode</label>
                  <select
                    className="form-select form-select-lg border-warning"
                    value={mode}
                    onChange={e => setMode(e.target.value)}
                    required
                  >
                    <option value="Cash">Cash</option>
                    <option value="UPI">UPI</option>
                    <option value="NEFT">NEFT</option>
                    <option value="Cheque">Cheque</option>
                  </select>
                </div>

                <div className="col-12">
                  <label className="form-label fw-bold">Category</label>
                  <select
                    className="form-select form-select-lg border-primary"
                    value={categoryId}
                    onChange={e => setCategoryId(e.target.value)}
                    required
                  >
                    <option value="">Select Category</option>
                    {categories.map(c => (
                      <option key={c.id} value={c.id}>
                        {c.expense_category_name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-12">
                  <button
                    type="submit"
                    className="btn btn-danger btn-lg w-100 rounded-pill shadow"
                  >
                    🚀 Add Expense
                  </button>
                </div>

              </div>
            </form>

          </div>
        </div>

        {/* Expense List */}
        <div className="text-white mb-4">
          <h3 className="fw-bold">Recent Expenses</h3>
        </div>

        <div className="row g-4">
          {expenseList.map(e => (
            <div key={e.id} className="col-md-6 col-lg-4">
              <div
                className="card border-0 shadow-lg rounded-4 h-100 text-white"
                style={{
                  background: "linear-gradient(135deg,#ff416c,#ff4b2b)",
                  transition: "0.4s"
                }}
              >
                <div className="card-body">
                  <h4 className="fw-bold">₹ {e.amount}</h4>
                  <p className="mb-1"><strong>Mode:</strong> {e.mode}</p>
                  <p className="mb-1">
                    <strong>Category:</strong>{" "}
                    {categories.find(c => c.id === e.category_id)?.expense_category_name || e.category_id}
                  </p>
                  <small>
                    {new Date(e.expensedate).toLocaleDateString()}
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

export default Expense;