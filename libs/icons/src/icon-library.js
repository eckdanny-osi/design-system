import { library } from '@fortawesome/fontawesome-svg-core';

export const ICONS = [
  'faArrowUp',
  'faCheck',
  'faCheckCircle',
  'faChevronDown',
  'faCircleNotch',
  'faEllipsisV',
  'faExclamationTriangle',
  'faInfoCircle',
  'faLightbulb',
  'faMinus',
  'faPlus',
  'faPlusCircle',
  'faSearch',
  'faSpinner',
  'faTimes',
  'faUpload',
  'faUser',
];

// Seed Icon Library
export default () => {
  library.add(iconPack(ICONS));
};

function iconPack(icons) {
  return icons.reduce(
    (acc, name) => ({
      ...acc,
      [name]: require(`@fortawesome/free-solid-svg-icons/${name}`).definition,
    }),
    {}
  );
}
