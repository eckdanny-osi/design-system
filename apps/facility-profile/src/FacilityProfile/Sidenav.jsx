import React from "react";
import { JumpNav } from "@cwds/components";

const routes = [
  { title: "Summary", path: "#summary" },
  { title: "Home Information", path: "#home-information" },
  { title: "Licensing / Approval Worker", path: "#licensing-approval-worker" },
  { title: "Children Placed", path: "#children-placed" },
  { title: "Complaint History", path: "#complaint-history" },
  { title: "Associated People", path: "#associated-people" },
  { title: "Contacts Summary", path: "#contacts-summary" },
  { title: "Tracking Summary", path: "#tracking-summary" }
];

export default () => <JumpNav routes={routes} />;
