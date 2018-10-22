export default {
  date: new Date().toISOString().slice(0, 10),
  classification: '',
  methodOfContact: '',
  inPersonDetail: {
    location: '',
    notice: '',
    collateralVisit: '',
    visitType: '',
    collateralVisitDetail: {
      startTime: '',
      endTime: '',
    },
  },
  title: '',
  notes: '',
}
