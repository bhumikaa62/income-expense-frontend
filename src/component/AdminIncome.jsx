import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminIncome() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const token = localStorage.getItem("token");

  useEffect(() => {
    axios.get("http://localhost:8989/admin/incomes", {
      headers: { Authorization: "Bearer " + token }
    })
    .then(res => {
      setData(res.data.data || []);
    })
    .catch(err => console.log(err));
  }, []);

  // 👁️ VIEW
  const handleView = (item) => {
    setSelected(item);
    setShowModal(true);
  };

  // ❌ DELETE
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this income?")) return;

    try {
      await axios.delete(`http://localhost:8989/admin/income/${id}`, {
        headers: { Authorization: "Bearer " + token }
      });

      setData(data.filter(d => d.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2 style={title}>💰 Income Records</h2>

      <div style={card}>
        <table style={table}>
          <thead>
            <tr style={thead}>
              <th>ID</th>
              <th>User</th>
              <th>Email</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {data.map((i, idx) => (
              <tr key={idx} style={row}>
                <td>{i.id}</td>

                <td>{i.User?.name}</td>
                <td>{i.User?.email}</td>

                <td style={{ color: "#4CAF50", fontWeight: "bold" }}>
                  ₹ {i.amount}
                </td>

                <td>
                  {new Date(i.createdAt).toLocaleDateString()}
                </td>

                <td>
                  <button style={viewBtn} onClick={() => handleView(i)}>
                    View
                  </button>

                  <button style={deleteBtn} onClick={() => handleDelete(i.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {data.length === 0 && (
          <p style={{ textAlign: "center" }}>No Income Found 😕</p>
        )}
      </div>

      {/* 🔥 MODAL */}
      {showModal && selected && (
        <div style={overlay}>
          <div style={modal}>
            <h2>Income Details 💰</h2>

            <p><b>User:</b> {selected.User?.name}</p>
            <p><b>Email:</b> {selected.User?.email}</p>
            <p><b>Amount:</b> ₹ {selected.amount}</p>
            <p><b>Date:</b> {new Date(selected.createdAt).toLocaleString()}</p>

            <button style={closeBtn} onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

//////////////////// STYLES ////////////////////

const title = {
  marginBottom: "20px"
};

const card = {
  background: "#fff",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
};

const table = {
  width: "100%",
  borderCollapse: "collapse"
};

const thead = {
  background: "#1e1e2f",
  color: "#fff"
};

const row = {
  borderBottom: "1px solid #eee",
  textAlign: "center",
  height: "50px"
};

const viewBtn = {
  padding: "5px 10px",
  marginRight: "5px",
  border: "none",
  borderRadius: "6px",
  background: "#2196F3",
  color: "#fff",
  cursor: "pointer"
};

const deleteBtn = {
  padding: "5px 10px",
  border: "none",
  borderRadius: "6px",
  background: "#f44336",
  color: "#fff",
  cursor: "pointer"
};

const overlay = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const modal = {
  background: "#fff",
  padding: "25px",
  borderRadius: "10px",
  width: "300px",
  textAlign: "center"
};

const closeBtn = {
  marginTop: "10px",
  padding: "8px 15px",
  border: "none",
  background: "#333",
  color: "#fff",
  borderRadius: "6px",
  cursor: "pointer"
};