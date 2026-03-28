function IssueList({ issues = [], deleteIssue, updateStatus }) {

  const getStatusColor = (status) => {
    switch (status) {
      case "Open":
        return "green";
      case "In Progress":
        return "orange";
      case "Under Review":
        return "blue";
      case "Resolved":
        return "purple";
      case "Closed":
        return "gray";
      default:
        return "black";
    }
  };

  return (
    <div>
      <h3 style={{ marginBottom: "20px" }}>
        Active Issues ({issues.length})
      </h3>

      {issues.length === 0 ? (
        <p>No Issues Found</p>
      ) : (
        issues.map((issue) => (
          <div
            key={issue.id}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              marginBottom: "15px",
              borderRadius: "8px",
              backgroundColor: "#fafafa"
            }}
          >
            <h4 style={{ marginBottom: "10px" }}>
              {issue.title}
            </h4>

            <p style={{ marginBottom: "6px" }}>
              <strong>Priority:</strong> {issue.priority}
            </p>

            <p style={{ marginBottom: "10px" }}>
              <strong>Status:</strong>{" "}
              <span
                style={{
                  color: getStatusColor(issue.status),
                  fontWeight: "bold"
                }}
              >
                {issue.status}
              </span>
            </p>

            {/* Status Dropdown */}
            <select
              value={issue.status}
              onChange={(e) =>
                updateStatus(issue.id, e.target.value)
              }
              style={{
                padding: "6px",
                marginRight: "10px",
                borderRadius: "4px"
              }}
            >
              <option>Open</option>
              <option>In Progress</option>
              <option>Under Review</option>
              <option>Resolved</option>
              <option>Closed</option>
            </select>

            {/* Delete Button */}
            <button
              onClick={() => deleteIssue(issue.id)}
              style={{
                backgroundColor: "#e74c3c",
                color: "white",
                border: "none",
                padding: "6px 12px",
                borderRadius: "4px",
                cursor: "pointer"
              }}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default IssueList;