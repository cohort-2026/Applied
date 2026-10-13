import { seedApplications } from "../data/seed";
import { ApplicationList } from "../components/ApplicationList";

export default function ApplicationsPage() {
  return (
    <div>
      <h1>Applied - Job Tracker</h1>
      <ApplicationList applications={seedApplications} />
    </div>
  );
}
