import React from "react";
import Summary from "./Summary";
import HomeInformation from "./HomeInformation";
import LicensingApprovalWorker from "./LicensingApprovalWorker";
import ChildrenPlaced from "./ChildrenPlaced";
import ComplaintHistory from "./ComplaintHistory";
import AssociatedPeople from "./AssociatedPeople";
import ContactsSummary from "./ContactsSummary";
import TrackingSummary from "./TrackingSummary";

export default () => (
  <div>
    <Summary />
    <HomeInformation />
    <LicensingApprovalWorker />
    <ChildrenPlaced />
    <ComplaintHistory />
    <AssociatedPeople />
    <ContactsSummary />
    <TrackingSummary />
  </div>
);
