import IssueForm from "../components/IssueForm";
import IssueList from "../components/IssueList";

function Home({ issues = [], addIssue, deleteIssue, updateStatus }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f4f6f9",
        padding: "40px"
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto"
        }}
      >
        {/* Title */}
        <h1
          style={{
            fontSize: "36px",
            marginBottom: "30px",
            color: "#333"
          }}
        >
          Smart Issue Tracker
        </h1>

        {/* Issue Form */}
        <div
          style={{
            backgroundColor: "white",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            marginBottom: "30px"
          }}
        >
          <IssueForm addIssue={addIssue} />
        </div>

        {/* Issue List */}
        <div
          style={{
            backgroundColor: "white",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
          }}
        >
          <IssueList
            issues={issues}
            deleteIssue={deleteIssue}
            updateStatus={updateStatus}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;