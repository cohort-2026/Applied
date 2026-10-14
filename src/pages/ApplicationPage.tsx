import { useParams, Link, useNavigate } from "react-router-dom";
import { seed } from "../data/seed";

export default function ApplicationPage() {
  var params = useParams();
  var id = params.id;
  var navigate = useNavigate();

  var saved = localStorage.getItem("my-jobs");
  var myJobs: any = [];
  if (saved) {
    myJobs = JSON.parse(saved);
  }

  var allJobs: any = [];
  for (var i = 0; i < myJobs.length; i++) {
    allJobs.push(myJobs[i]);
  }
  for (var j = 0; j < seed.length; j++) {
    allJobs.push(seed[j]);
  }

  var job: any = null;
  for (var k = 0; k < allJobs.length; k++) {
    if (allJobs[k].id === id) {
      job = allJobs[k];
    }
  }

  if (!job) {
    return (
      <div>
        Not found <Link to="/">Home</Link>
      </div>
    );
  }

  function changeStage(newStage: any) {
    var updated: any = [];
    for (var a = 0; a < myJobs.length; a++) {
      if (myJobs[a].id === id) {
        myJobs[a].stage = newStage;
      }
      updated.push(myJobs[a]);
    }
    var isSeed = true;
    for (var b = 0; b < myJobs.length; b++) {
      if (myJobs[b].id === id) {
        isSeed = false;
      }
    }
    if (isSeed) {
      job.stage = newStage;
      updated.push(job);
    }

    localStorage.setItem("my-jobs", JSON.stringify(updated));
    window.location.reload();
  }
  function deleteJob() {
    var ok = window.confirm("Are you sure you want to delete this job?");
    if (!ok) {
      return;
    }
    var remaining: any = [];
    for (var c = 0; c < myJobs.length; c++) {
      if (myJobs[c].id !== id) {
        remaining.push(myJobs[c]);
      }
    }
    localStorage.setItem("my-jobs", JSON.stringify(remaining));
    navigate("/");
  }

  return (
    <div style={{ padding: 20 }}>
      <Link to="/">Back</Link>
      <h1>{job.company}</h1>
      <p>Role: {job.role}</p>
      <p>Stage: {job.stage}</p>
      <p>Date: {job.dateSent}</p>

      <div style={{ marginTop: 20 }}>
        <button
          onClick={function () {
            changeStage("Applied");
          }}
        >
          Applied
        </button>
        <button
          onClick={function () {
            changeStage("Interviewing");
          }}
        >
          Interviewing
        </button>
        <button
          onClick={function () {
            changeStage("Offer");
          }}
        >
          Offer
        </button>
        <button
          onClick={function () {
            changeStage("Rejected");
          }}
        >
          Rejected
        </button>
      </div>

      <button
        onClick={deleteJob}
        style={{ marginTop: 20, backgroundColor: "hotpink", color: "black" }}
      >
        Delete Job
      </button>
    </div>
  );
}
