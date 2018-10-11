export const CLASSIFICATION = {
  CONFIDENTIAL: 'confidential',
  PUBLIC: 'public',
};

export const CLASSIFICATION_OPTIONS = [
  { value: CLASSIFICATION.CONFIDENTIAL, label: 'Confidential' },
  { value: CLASSIFICATION.PUBLIC, label: 'Public' },
];

export const CONTACT_METHOD = {
  IN_PERSON: 'inPerson',
  TELEPHONE: 'telephone',
  EMAIL: 'email',
  OTHER: 'other',
};

export const CONCTACT_METHOD_OPTIONS = [
  { value: CONTACT_METHOD.IN_PERSON, label: 'In Person' },
  { value: CONTACT_METHOD.EMAIL, label: 'Email' },
  { value: CONTACT_METHOD.TELEPHONE, label: 'Telephone' },
  { value: CONTACT_METHOD.OTHER, label: 'Other' },
];

export const LOCATION = {
  OFFICE: 'office',
  HOME_FACILITY: 'homeFacility',
  OTHER: 'other',
};

export const LOCATION_OPTIONS = [
  { value: LOCATION.OFFICE, label: 'Office' },
  { value: LOCATION.HOME_FACILITY, label: 'Home/Facility' },
  { value: LOCATION.OTHER, label: 'Other' },
];

export const NOTICE = {
  ANNOUNCED: 'announced',
  UNANNOUNCED: 'unannounced',
};

export const NOTICE_OPTIONS = [
  { value: NOTICE.ANNOUNCED, label: 'Announced' },
  { value: NOTICE.UNANNOUNCED, label: 'Unannounced' },
];

export const IS_COLLATERAL_VISIT = {
  YES: 'yes',
  NO: 'no',
};

export const COLLATERAL_VISIT_OPTIONS = [
  { value: IS_COLLATERAL_VISIT.NO, label: 'No' },
  { value: IS_COLLATERAL_VISIT.YES, label: 'Yes' },
];

export const VISIT_TYPE = {
  EMERGENCY_PLACEMENT_ASSESSMENT: '01',
  INITIAL_HOME_INSPECTION: '02',
  FOLLOW_UP_VISIT: '03',
  INITIAL_ASSESSMENT: '04',
  FOLLOW_UP_ASSESSMENT: '05',
  ANNUAL_REVIEW: '06',
  LOCATION_CHANGE: '07',
  CASE_MANAGEMENT_VISIT: '08',
  COMPLAINT: '09',
  INCIDENT_REPORT: '10',
  RSO_CHECK: '11',
  CLIENT_DEATH: '12',
  OTHER: '13',
};

export const VISIT_TYPE_OPTIONS = [
  {
    value: VISIT_TYPE.EMERGENCY_PLACEMENT_ASSESSMENT,
    label: 'Emergency Placement Assessment',
  },
  {
    value: VISIT_TYPE.INITIAL_HOME_INSPECTION,
    label: 'Initial Home Inspection',
  },
  {
    value: VISIT_TYPE.FOLLOW_UP_VISIT,
    label: 'Follow-up Visit (for Initials or Reassessments)',
  },
  {
    value: VISIT_TYPE.INITIAL_ASSESSMENT,
    label: 'Initial Assessment - Psychological',
  },
  {
    value: VISIT_TYPE.FOLLOW_UP_ASSESSMENT,
    label: 'Follow-up Assessment - Psychological',
  },
  { value: VISIT_TYPE.ANNUAL_REVIEW, label: 'Annual Review/Reassessment' },
  { value: VISIT_TYPE.LOCATION_CHANGE, label: 'Location Change' },
  { value: VISIT_TYPE.CASE_MANAGEMENT_VISIT, label: 'Case Management Visit' },
  { value: VISIT_TYPE.COMPLAINT, label: 'Complaint' },
  { value: VISIT_TYPE.INCIDENT_REPORT, label: 'Incident Report Investigation' },
  { value: VISIT_TYPE.RSO_CHECK, label: 'RSO Check' },
  { value: VISIT_TYPE.CLIENT_DEATH, label: 'Client Death' },
  { value: VISIT_TYPE.OTHER, label: 'Other' },
];
