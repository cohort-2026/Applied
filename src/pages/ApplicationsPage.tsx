import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { seed } from "../data/seed";
import { ApplicationCard } from "../components/ApplicationCard";

export function ApplicationsPage() {
  var [search, setSearch] = useState("");
  var [stage, setStage] = useState("all");
  var [jobs, setJobs] = useState(seed);

  useEffect(function () {
    var saved = localStorage.getItem("my-jobs");
    if (saved) {
      var parsed = JSON.parse(saved);
      var merged = [...seed, ...parsed];
      setJobs(merged);
    }
    var theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.body.style.backgroundColor = "#111";
    }
  }, []);

  function toggleDark() {
    var isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    if (isDark) {
      document.body.style.backgroundColor = "#111";
    } else {
      document.body.style.backgroundColor = "white";
    }
  }

  var filtered: any = [];
  for (var i = 0; i < jobs.length; i++) {
    var job = jobs[i];
    var matchSearch =
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.role.toLowerCase().includes(search.toLowerCase());
    var matchStage = stage === "all" || job.stage === stage;
    if (matchSearch && matchStage) {
      filtered.push(job);
    }
  }

  return (
    <div
      style={{
        padding: "16px",
        maxWidth: "800px",
        margin: "0 auto",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ color: "black" }}>Applied</h1>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <button
            onClick={toggleDark}
            style={{
              backgroundColor: "white",
              padding: "6px 12px",
              border: "1px solid gray",
              borderRadius: "6px",
              fontSize: "12px",
              cursor: "pointer",
            }}
          >
            Dark
          </button>
          <Link
            to="/new"
            style={{
              backgroundColor: "blue",
              color: "white",
              padding: "6px 12px",
              borderRadius: "6px",
              fontSize: "12px",
              textDecoration: "none",
            }}
          >
            + add application
          </Link>
        </div>
      </div>

      <div style={{ marginTop: "16px", display: "flex", gap: "8px" }}>
        <input
          value={search}
          onChange={function (e: any) {
            setSearch(e.target.value);
          }}
          placeholder="Search company or role"
          style={{
            flex: 1,
            padding: "8px",
            border: "1px solid gray",
            borderRadius: "6px",
          }}
        />
        <select
          value={stage}
          onChange={function (e: any) {
            setStage(e.target.value);
          }}
          style={{
            padding: "8px",
            border: "1px solid gray",
            borderRadius: "6px",
          }}
        >
          <option value="all">All Stages</option>
          <option value="wishlist">Wishlist</option>
          <option value="applied">Applied</option>
          <option value="interview">Interview</option>
          <option value="offer">Offer</option>
          <option value="closed">Closed</option>
        </select>
      </div>

      <p style={{ fontSize: "12px", color: "gray", marginTop: "12px" }}>
        {filtered.length} applications
      </p>

      <div style={{ marginTop: "12px" }}>
        {filtered.map(function (app: any) {
          return <ApplicationCard key={app.id} application={app} />;
        })}
      </div>
    </div>
  );
}
