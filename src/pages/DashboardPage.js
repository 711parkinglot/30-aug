import React, { useState, useEffect } from "react";
import "./DashboardPage.css";

function DashboardPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="dashboard-page">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="data-container">
        {data.map((item, index) => (
          <div className="data-card" key={index}>
            <h2 className="data-title">{item.title}</h2>
            <p className="data-value">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardPage;
