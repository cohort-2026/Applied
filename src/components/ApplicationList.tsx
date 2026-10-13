import type { Application } from "../types";
import { ApplicationCard } from "./ApplicationCard";

type Props = {
  applications: Application[];
};

export function ApplicationList({ applications }: Props) {
  if (applications.length === 0) {
    return <p>No applications yet. Add your first one!</p>;
  }

  return (
    <div className="grid gap-4">
      {applications.map(function (app) {
        return <ApplicationCard key={app.id} application={app} />;
      })}
    </div>
  );
}
