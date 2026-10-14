import { seedApplications } from "../data/seed";
import { ApplicationList } from "../components/ApplicationList";

export default function ApplicationsPage() {
  var saved = localStorage.getItem("my-jobs");
  var myJobs = [];

  if (saved) {
    myJobs = JSON.parse(saved);
  }

  var allJobs = [];

  for (var i = 0; i < myJobs.length; i++) {
    allJobs.push(myJobs[i]);
  }

  for (var j = 0; j < seedApplications.length; j++) {
    allJobs.push(seedApplications[j]);
  }

  return (
    <div>
      <h1>Applied - Job Tracker</h1>
      <ApplicationList applications={allJobs} />
    </div>
  );
}
