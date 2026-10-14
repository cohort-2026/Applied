import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function NewApplicationPage() {
  const navigate = useNavigate();
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();

    const newJob = {
      id: Date.now().toString(),
      company: company,
      role: role,
      stage: "Applied",
      dateSent: new Date().toISOString().split("T")[0],
      link: "",
      notes: "",
      nextAction: "",
    };

    const saved = localStorage.getItem("my-jobs");
    const oldJobs = saved ? JSON.parse(saved) : [];

    const allJobs = [newJob, ...oldJobs];
    localStorage.setItem("my-jobs", JSON.stringify(allJobs));

    navigate("/");
  }

  return (
    <div style={{ padding: 20 }}>
      <Link to="/">Back</Link>
      <h1>Add New Job</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <p>Company</p>
          <input
            value={company}
            onChange={function (e) {
              setCompany(e.target.value);
            }}
            placeholder="e.g. Microsoft"
          />
        </div>

        <div style={{ marginTop: 10 }}>
          <p>Role</p>
          <input
            value={role}
            onChange={function (e) {
              setRole(e.target.value);
            }}
            placeholder="e.g. Junior Developer"
          />
        </div>

        <button type="submit" style={{ marginTop: 20 }}>
          Save Job
        </button>
      </form>
    </div>
  );
}
