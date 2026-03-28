function Reports({ issues = [] }) {
  const total = issues.length;
  const closed = issues.filter(i => i.status === "Closed").length;
  const open = issues.filter(i => i.status === "Open").length;
  const efficiency =
    total === 0 ? 0 : Math.round((closed / total) * 100);

  const cardStyle = {
    flex: "1",
    padding: "30px",
    borderRadius: "12px",
    color: "white",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f4f6f9",
        padding: "40px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h1
          style={{
            fontSize: "32px",
            marginBottom: "40px",
            color: "#333",
          }}
        >
          Reports Dashboard
        </h1>

        {/* Cards Section */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          <div style={{ ...cardStyle, backgroundColor: "#3498db" }}>
            <h2>{total}</h2>
            <p>Total Issues</p>
          </div>

          <div style={{ ...cardStyle, backgroundColor: "#e74c3c" }}>
            <h2>{open}</h2>
            <p>Open Issues</p>
          </div>

          <div style={{ ...cardStyle, backgroundColor: "#2ecc71" }}>
            <h2>{closed}</h2>
            <p>Closed Issues</p>
          </div>
        </div>

        {/* Efficiency Section */}
        <div
          style={{
            backgroundColor: "white",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <h2>Resolution Efficiency</h2>
          <div
            style={{
              fontSize: "48px",
              fontWeight: "bold",
              color: "#2ecc71",
              marginTop: "20px",
            }}
          >
            {efficiency}%
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reports;