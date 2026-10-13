import type { Stage } from "../types";

type Props = {
  stage: Stage;
};

export function StageBadge({ stage }: Props) {
  let bgColor = "bg-gray-200";
  let textColor = "text-gray-800";

  if (stage === "wishlist") {
    bgColor = "bg-slate-200";
    textColor = "text-slate-800";
  }

  if (stage === "applied") {
    bgColor = "bg-blue-200";
    textColor = "text-blue-800";
  }

  if (stage === "interview") {
    bgColor = "bg-yellow-200";
    textColor = "text-yellow-800";
  }

  if (stage === "offer") {
    bgColor = "bg-green-200";
    textColor = "text-green-800";
  }

  if (stage === "closed") {
    bgColor = "bg-red-200";
    textColor = "text-red-800";
  }

  return (
    <span
      className={
        bgColor +
        " " +
        textColor +
        " rounded px-2 py-1 text-xs font-bold uppercase"
      }
    >
      {stage}
    </span>
  );
}
