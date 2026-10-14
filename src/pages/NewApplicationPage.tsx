import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function NewApplicationPage() {
  var [company, setCompany] = useState("");
  var [role, setRole] = useState("");
  var navigate = useNavigate();

  function handleSubmit(e: any) {
    e.preventDefault();

    var saved = localStorage.getItem("my-jobs");
    var oldJobs = saved ? JSON.parse(saved) : [];

    // fix: all required fields + lowercase stage
    var newJob = {
      id: Date.now().toString(),
      company: company,
      role: role,
      stage: "applied",
      dateSent: new Date().toISOString().split("T")[0],
      createdAt: new Date().toISOString(),
    };

    var updated = [...oldJobs, newJob];
    localStorage.setItem("my-jobs", JSON.stringify(updated));

    navigate("/");
  }

  return (
    <div
      style={{
        padding: "16px",
        maxWidth: "600px",
        margin: "0 auto",
        backgroundColor: "white",
      }}
    >
      <h1 style={{ color: "black" }}>Add Application</h1>

      <form
        onSubmit={handleSubmit}
        style={{
          marginTop: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <input
          value={company}
          onChange={function (e: any) {
            setCompany(e.target.value);
          }}
          placeholder="Company"
          required
          style={{
            padding: "8px",
            border: "1px solid gray",
            borderRadius: "6px",
          }}
        />
        <input
          value={role}
          onChange={function (e: any) {
            setRole(e.target.value);
          }}
          placeholder="Role"
          required
          style={{
            padding: "8px",
            border: "1px solid gray",
            borderRadius: "6px",
          }}
        />

        <button
          type="submit"
          style={{
            backgroundColor: "blue",
            color: "white",
            padding: "10px",
            borderRadius: "6px",
            border: "none",
          }}
        >
          Save
        </button>
      </form>
    </div>
  );
}
