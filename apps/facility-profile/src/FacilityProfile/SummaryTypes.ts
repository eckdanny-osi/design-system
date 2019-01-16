type FacilityType = "something" | "else";

type FacilityStatus = "SOMETHING" | "ELSE" | "IDUNNO";

// Really how is this stored?
type FacilityAgeRange = "0-2" | "2-4";

interface FacilityLicensee {
  firstName: string;
  lastName: string;
}

interface IFacilitySummary {
  name: string;
  id: string;
  type: FacilityType;
  licensee: FacilityLicensee;
  status: FacilityStatus;
  applicationReceivedDate: Date;
  assignedOversightAgency: string;
  ageRange: FacilityAgeRange;
  capacity: number;
  capacityLastChangedDate: Date;
  adjustedCapacity: number;
  availableBeds: number;
}

//
// Form Structure
//
