import { Link } from "react-router-dom";

type Props = {
  application: any;
};

export function ApplicationCard({ application }: Props) {
  // days count
  const sentDate = new Date(application.dateSent);
  const today = new Date();
  const diffDays = Math.floor(
    (today.getTime() - sentDate.getTime()) / (1000 * 60 * 60 * 24),
  );

  const showNudge = application.stage === "applied" && diffDays > 14;

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "12px",
        borderRadius: "8px",
        marginBottom: "10px",
        backgroundColor: "white",
      }}
    >
      <Link
        to={`/applications/${application.id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <h3 style={{ margin: "0" }}>
          {application.company} - {application.role}
        </h3>
      </Link>

      <p style={{ fontSize: "12px", color: "gray", marginTop: "4px" }}>
        Stage: {application.stage} | Sent: {application.dateSent} | {diffDays}{" "}
        days ago
      </p>

      {showNudge && (
        <span
          style={{
            backgroundColor: "hotpink",
            color: "white",
            padding: "2px 8px",
            borderRadius: "10px",
            fontSize: "11px",
          }}
        >
          Needs a nudge
        </span>
      )}
    </div>
  );
}
