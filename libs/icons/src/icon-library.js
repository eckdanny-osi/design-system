import { library } from '@fortawesome/fontawesome-svg-core';

const ICONS = [
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

const { iconPack, iconNames: ICON_NAMES } = loadIcons(ICONS);

// Seed Icon Library
export default () => {
  library.add(iconPack);
};

export { ICON_NAMES };

function loadIcons(icons) {
  const iconPack = {};
  let iconNames = [];
  icons.forEach(name => {
    const mod = require(`@fortawesome/free-solid-svg-icons/${name}`);
    iconPack[name] = mod.definition;
    iconNames.push(mod.iconName);
  });
  return { iconPack, iconNames };
}
