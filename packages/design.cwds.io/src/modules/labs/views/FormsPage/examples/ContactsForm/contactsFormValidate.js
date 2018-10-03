import { LOCATION, CONTACT_METHOD } from './contactsFormEnums';
export default values => {
  let errors = {};

  if ('' === values.date) errors.date = 'Required!';

  if ('' === values.methodOfContact) errors.methodOfContact = 'Required!';

  if (
    values.inPersonDetail.location === LOCATION.HOME_FACILITY &&
    '' === values.inPersonDetail.notice
  ) {
    errors.notice = 'Required!';
  }

  if ('' === values.classification) {
    errors.classification = 'Required!';
  }

  if ('' === values.title) {
    errors.title = 'Required!';
  }

  if (CONTACT_METHOD.IN_PERSON === values.methodOfContact) {
    let inPersonDetailErrors = {};
    if ('' === values.inPersonDetail.notice) {
      inPersonDetailErrors.notice = 'Required!';
    }
    if ('' === values.inPersonDetail.collateralVisit) {
      inPersonDetailErrors.notice = 'Required!';
    }
    if (Object.keys(inPersonDetailErrors).length) {
      errors.inPersonDetail = inPersonDetailErrors;
    }
  }

  return errors;
};
