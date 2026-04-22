import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null); // 👈 modal data
  const [showModal, setShowModal] = useState(false); // 👈 modal toggle

  const token = localStorage.getItem("token");

  useEffect(() => {
    axios.get("http://localhost:8989/admin/users", {
      headers: { Authorization: "Bearer " + token }
    })
    .then(res => {
      setUsers(res.data.data || []);
    })
    .catch(err => console.log(err));
  }, []);

  // 👁️ VIEW
  const handleView = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  // ❌ DELETE
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this user?")) return;

    try {
      await axios.delete(`http://localhost:8989/admin/user/${id}`, {
        headers: { Authorization: "Bearer " + token }
      });

      setUsers(users.filter(u => u.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2 style={title}>👥 All Users</h2>

      <div style={card}>
        <table style={table}>
          <thead>
            <tr style={thead}>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Role</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((u, i) => (
              <tr key={i} style={row}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.mobile}</td>

                <td>
                  <span style={{
                    padding: "5px 10px",
                    borderRadius: "20px",
                    color: "#fff",
                    background: u.role === "admin" ? "#4CAF50" : "#2196F3",
                    fontSize: "12px"
                  }}>
                    {u.role || "user"}
                  </span>
                </td>

                <td>
                  <span style={{
                    ...badge,
                    background: u.isActive ? "#4CAF50" : "#f44336"
                  }}>
                    {u.isActive ? "Active" : "Inactive"}
                  </span>
                </td>

                <td>
                  <button style={viewBtn} onClick={() => handleView(u)}>
                    View
                  </button>

                  <button style={deleteBtn} onClick={() => handleDelete(u.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {users.length === 0 && (
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            No Users Found 😕
          </p>
        )}
      </div>

      {/* 🔥 MODAL */}
      {showModal && selectedUser && (
        <div style={modalOverlay}>
          <div style={modalBox}>
            <h2>User Details 👤</h2>

            <p><b>ID:</b> {selectedUser.id}</p>
            <p><b>Name:</b> {selectedUser.name}</p>
            <p><b>Email:</b> {selectedUser.email}</p>
            <p><b>Mobile:</b> {selectedUser.mobile}</p>
            <p><b>Role:</b> {selectedUser.role}</p>
            <p><b>Status:</b> {selectedUser.isActive ? "Active" : "Inactive"}</p>

            <button style={closeBtn} onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

///////////////////// STYLES /////////////////////

const title = {
  marginBottom: "20px",
  color: "#333"
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

const badge = {
  padding: "5px 10px",
  borderRadius: "20px",
  color: "#fff",
  fontSize: "12px"
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

const modalOverlay = {
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

const modalBox = {
  background: "#fff",
  padding: "25px",
  borderRadius: "10px",
  width: "300px",
  textAlign: "center",
  boxShadow: "0 5px 20px rgba(0,0,0,0.3)"
};

const closeBtn = {
  marginTop: "15px",
  padding: "8px 15px",
  border: "none",
  background: "#333",
  color: "#fff",
  borderRadius: "6px",
  cursor: "pointer"
};