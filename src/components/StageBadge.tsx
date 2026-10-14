import type { Stage } from "../types";

export function StageBadge(props: { stage: Stage }) {
  var display = props.stage as string;
  if (props.stage === "wishlist") {
    display = "saved";
  }

  var color = "border-gray-300 text-gray-500";
  if (props.stage === "applied") color = "border-blue-600 text-blue-700";
  if (props.stage === "interview") color = "border-yellow-600 text-yellow-700";
  if (props.stage === "offer") color = "border-green-600 text-green-700";
  if (props.stage === "closed") color = "border-gray-300 text-gray-500";
  if (props.stage === "wishlist") color = "border-gray-300 text-gray-500";

  return (
    <span
      className={
        "text-[10px] font-bold px-2.5 py-1 rounded-full border bg-white " +
        color
      }
    >
      {display.toUpperCase()}
    </span>
  );
}
