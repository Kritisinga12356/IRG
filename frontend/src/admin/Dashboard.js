import React, { useEffect, useState } from "react";
import {
  BarChart, Bar,
  PieChart, Pie, Cell,
  LineChart, Line,
  XAxis, YAxis, Tooltip, CartesianGrid,
  ResponsiveContainer
} from "recharts";

import {
  GraduationCap,
  Users,
  FilePlus2,
  IndianRupee,
  Sun,
  Moon,
  UserCircle
} from "lucide-react";

function Dashboard() {
  const [dark, setDark] = useState(false);

  const [stats, setStats] = useState({
    scholarships: 0,
    users: 0,
    applications: 0,
    totalAmount: 0,
  });

  const [recent, setRecent] = useState([]);

  useEffect(() => {
    loadScholarships();
  }, []);

  // Load Scholarship Data from Backend
  const loadScholarships = async () => {
    const token = localStorage.getItem("adminToken");

  const res = await fetch("http://localhost:5000/api/scholarships", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
    const data = await res.json();

    const totalAmount = data.reduce(
      (sum, s) => sum + (Number(s.amount) || 0),
      0
    );

    setStats({
      scholarships: data.length,
      users: 235,
      applications: 91,
      totalAmount,
    });

    setRecent(data.slice(0, 5));
  };

  // Dummy Chart Data
  const userData = [
    { month: "Jan", users: 20 },
    { month: "Feb", users: 30 },
    { month: "Mar", users: 24 },
    { month: "Apr", users: 50 },
    { month: "May", users: 70 },
    { month: "Jun", users: 90 },
  ];

  const categoryData = [
    { name: "Engineering", value: 12 },
    { name: "Medical", value: 9 },
    { name: "Arts", value: 8 },
    { name: "Commerce", value: 5 },
  ];

  const applicationsData = [
    { month: "Jan", apps: 10 },
    { month: "Feb", apps: 25 },
    { month: "Mar", apps: 40 },
    { month: "Apr", apps: 20 },
    { month: "May", apps: 60 },
    { month: "Jun", apps: 80 },
  ];

  const COLORS = ["#4e73df", "#1cc88a", "#36b9cc", "#f6c23e"];

  return (
    <div
      style={{
        ...styles.container,
        background: dark ? "#1e1e1e" : "#f4f6f9",
        color: dark ? "#fff" : "#000",
      }}
    >
      {/* ⭐ TOP BAR */}
      <div style={styles.topBar}>
        <h2 style={styles.heading}>📊 Admin Dashboard</h2>

        <div style={styles.topBarRight}>
          <button style={styles.themeBtn} onClick={() => setDark(!dark)}>
            {dark ? <Sun size={22} /> : <Moon size={22} />}
          </button>

          <div style={styles.profileCard}>
            <UserCircle size={35} />
            <div>
              <strong>Admin</strong>
              <p style={{ margin: 0, fontSize: "12px" }}>admin@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* ⭐ STATS CARDS */}
      <div style={styles.cardGrid}>
        <StatCard
          icon={<GraduationCap size={32} />}
          title="Total Scholarships"
          value={stats.scholarships}
          color="#4e73df"
        />
        <StatCard
          icon={<Users size={32} />}
          title="Total Users"
          value={stats.users}
          color="#1cc88a"
        />
        <StatCard
          icon={<FilePlus2 size={32} />}
          title="Applications"
          value={stats.applications}
          color="#36b9cc"
        />
        <StatCard
          icon={<IndianRupee size={32} />}
          title="Total Amount"
          value={`₹${stats.totalAmount.toLocaleString()}`}
          color="#f6c23e"
        />
      </div>

      {/* ⭐ CHARTS ROW */}
      <div style={styles.chartsRow}>

        {/* Bar Chart */}
        <div style={styles.chartBox}>
          <h3>📈 Monthly Users</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={userData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="users" fill="#4e73df" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div style={styles.chartBox}>
          <h3>🥧 Scholarship Categories</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label
              >
                {categoryData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Line Chart */}
        <div style={styles.chartBox}>
          <h3>📉 Applications Growth</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={applicationsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="apps"
                stroke="#1cc88a"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

      </div>

      {/* ⭐ RECENT SCHOLARSHIPS */}
      <div style={styles.recentBox}>
        <h3>🕒 Recent Scholarships</h3>
        {recent.map((item) => (
          <div key={item._id} style={styles.recentItem}>
            <strong>{item.title}</strong>
            <span>{new Date(item.createdAt).toLocaleDateString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function StatCard({ icon, title, value, color }) {
  return (
    <div style={{ ...styles.card, borderLeft: `6px solid ${color}` }}>
      <div style={{ ...styles.icon, color }}>{icon}</div>
      <div>
        <p style={styles.cardTitle}>{title}</p>
        <h2 style={styles.cardValue}>{value}</h2>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    minHeight: "100vh",
    transition: "0.3s",
  },

  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  heading: {
    fontSize: "26px",
    fontWeight: "bold",
  },

  topBarRight: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },

  themeBtn: {
    padding: "10px",
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    background: "#ddd",
  },

  profileCard: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    background: "#fff",
    padding: "10px 15px",
    borderRadius: "10px",
    boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
  },

  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  },

  card: {
    display: "flex",
    gap: "15px",
    padding: "20px",
    borderRadius: "12px",
    background: "#fff",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },

  icon: {
    padding: "10px",
    background: "rgba(0,0,0,0.05)",
    borderRadius: "10px",
  },

  cardTitle: { margin: 0, fontSize: "14px", color: "#555" },
  cardValue: { margin: 0, fontSize: "28px", fontWeight: "bold" },

  chartsRow: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "20px",
    marginTop: "30px",
  },

  chartBox: {
    padding: "20px",
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },

  recentBox: {
    marginTop: "30px",
    padding: "20px",
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },

  recentItem: {
    padding: "12px 0",
    borderBottom: "1px solid #eee",
    display: "flex",
    justifyContent: "space-between",
  },
};

export default Dashboard;
