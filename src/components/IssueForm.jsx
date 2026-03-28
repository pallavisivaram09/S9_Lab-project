import { useState } from "react";

function IssueForm({ addIssue }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Low");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    addIssue({
      title,
      priority,
      status: "Open"   // ✅ Ensure status is always added
    });

    setTitle("");
    setPriority("Low");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ marginBottom: "20px" }}
    >
      <input
        type="text"
        placeholder="Enter Issue Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{
          padding: "10px",
          marginRight: "10px",
          width: "250px",
          borderRadius: "6px",
          border: "1px solid #ccc"
        }}
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        style={{
          padding: "10px",
          marginRight: "10px",
          borderRadius: "6px",
          border: "1px solid #ccc"
        }}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <button
        type="submit"
        style={{
          padding: "10px 16px",
          backgroundColor: "#27ae60",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        Add Issue
      </button>
    </form>
  );
}

export default IssueForm;