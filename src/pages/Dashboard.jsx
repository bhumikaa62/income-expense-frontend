import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();

  const [incomeList, setIncomeList] = useState([]);
  const [expenseList, setExpenseList] = useState([]);
  const [summary, setSummary] = useState({ totalIncome: 0, totalExpense: 0, balance: 0 });

  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());
const [viewType, setViewType] = useState(null); 
// null | "income" | "expense"
  // Fetch Income
  const fetchIncome = async () => {
    const res = await fetch(`http://localhost:8989/income/listincome/12/${userId}`, {
      headers: { "authorization": token }
    });
    const data = await res.json();
    if (data.status) setIncomeList(data.data);
  };

  // Fetch Expense
  const fetchExpense = async () => {
    const res = await fetch("http://localhost:8989/expense/list", {
      method: "POST",
      headers: { "Content-Type": "application/json", "authorization": token },
      body: JSON.stringify({ user_id: userId })
    });
    const data = await res.json();
    if (data.status) setExpenseList(data.data); 
  };

  // Fetch Summary
  const fetchSummary = async (m = month, y = year) => {
    const res = await fetch(`http://localhost:8989/dashboard/summary?user_id=${userId}&month=${m}&year=${y}`);
    const data = await res.json();
    if (data.status) setSummary(data.data);
  };

  useEffect(() => {
    if (token && userId) {
      fetchIncome();
      fetchExpense();
      fetchSummary();
    }
  }, []);

  const recentTransactions = [...incomeList.map(i => ({...i, type: "Income"})),
                              ...expenseList.map(e => ({...e, type: "Expense"}))]
                              .sort((a,b) => new Date(b.date || b.expensedate) - new Date(a.date || a.expensedate))
                              .slice(0,5);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

 return (
  <div
    className="min-vh-100 text-white"
    style={{
      background: "linear-gradient(135deg,#141E30,#243B55)",
      padding: "30px"
    }}
  >
    <div className="container">

      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-5">
        <h2 className="fw-bold display-5">
          💎 My Finance Dashboard
        </h2>
        <button
          className="btn btn-danger px-4"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>

      {/* SUMMARY CARDS */}
      <div className="row g-4 mb-5">
        {[
          {
            title: "Total Income",
            value: summary.totalIncome,
            bg: "linear-gradient(135deg,#00b09b,#96c93d)"
          },
          {
            title: "Total Expense",
            value: summary.totalExpense,
            bg: "linear-gradient(135deg,#ff416c,#ff4b2b)"
          },
          {
            title: "Balance",
            value: summary.balance,
            bg: "linear-gradient(135deg,#1e3c72,#2a5298)"
          }
        ].map((card, index) => (
          <div className="col-md-4" key={index}>
            <div
              className="p-4 rounded-4 text-center shadow-lg"
              style={{
                background: card.bg,
                transition: "0.4s ease",
                cursor: "pointer"
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform =
                  "translateY(-10px) scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "none")
              }
            >
              <h5 className="fw-bold">{card.title}</h5>
              <h2 className="fw-bold mt-3">
                ₹ {card.value}
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* ACTION BUTTONS */}
      <div className="d-flex flex-wrap gap-3 mb-5">
        <button
          className="btn btn-success btn-lg"
          onClick={() => navigate("/income")}
        >
          ➕ Add Income
        </button>

        <button
          className="btn btn-danger btn-lg"
          onClick={() => navigate("/expense")}
        >
          ➖ Add Expense
        </button>
       <button
            className="btn btn-primary btn-lg"
            onClick={() => setViewType("income")}
          >
            📈 View All Income
          </button>

          <button
            className="btn btn-warning btn-lg"
            onClick={() => setViewType("expense")}
          >
            📉 View All Expense
          </button>

      
      </div>
  {/* VIEW SECTION */}
        {viewType === "income" && (
          <div className="mb-5">
            <h4 className="fw-bold mb-3">All Incomes</h4>
            <ul className="list-group">
              {incomeList.map((i, index) => (
                <li key={index} className="list-group-item">
                  ₹ {i.amount} - {i.source_id}
                </li>
              ))}
            </ul>
          </div>
        )}

        {viewType === "expense" && (
          <div className="mb-5">
            <h4 className="fw-bold mb-3">All Expenses</h4>
            <ul className="list-group">
              {expenseList.map((e, index) => (
                <li key={index} className="list-group-item">
                  ₹ {e.amount} - {e.category_id}
                </li>
              ))}
            </ul>
          </div>
        )}
{viewType === null&&(
  <>

      {/* RECENT TRANSACTIONS */}
      <h4 className="mb-4 fw-bold">⚡ Recent Transactions</h4>

      <div className="rounded-4 overflow-hidden shadow-lg">
        <ul className="list-group">
          {recentTransactions.map((t, idx) => (
            <li
              key={idx}
              className="list-group-item d-flex justify-content-between align-items-center"
              style={{
                background:
                  t.type === "Income"
                    ? "linear-gradient(135deg,#00b09b,#96c93d)"
                    : "linear-gradient(135deg,#ff416c,#ff4b2b)",
                color: "white",
                border: "none"
              }}
            >
              <div>
                <strong>{t.type}</strong> - ₹ {t.amount}
                <br />
                <small>
                  {t.type === "Income"
                    ? "Source: " + t.source_id
                    : "Category: " + t.category_id}
                </small>
              </div>
               
              <div>
                {new Date(
                  t.date || t.expensedate
                ).toLocaleDateString()}
              </div>
            </li>
          ))}
        </ul>
      
      </div>
</>)}
    </div>
  </div>
);
}

export default Dashboard;
