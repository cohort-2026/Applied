import type { Application, Stage } from "../types";

export function daysSince(dateSent: string, today?: Date) {
  var now = today? today : new Date();
  var sent = new Date(dateSent);
  var diff = now.getTime() - sent.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

export function needsNudge(application: Application, today?: Date) {
  if (application.stage!== "applied") {
    return false;
  }
  var days = daysSince(application.dateSent, today);
  if (days > 14) {
    return true;
  }
  return false;
}

export function countByStage(applications: Application[]) {
  var counts: Record<Stage, number> = {
    wishlist: 0,
    applied: 0,
    interview: 0,
    offer: 0,
    closed: 0,
  };
  for (var i = 0; i < applications.length; i++) {
    var s = applications[i].stage;
    counts[s]++;
  }
  return counts;
}