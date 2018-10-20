const DS = require('./core');

module.exports = {
  ...DS.grays,
  ...DS.themeColors,
  spacer: DS.spacer,
  ...DS.spacers,
  white: DS.colors.white,
  black: DS.colors.black,
  ...DS.breakpoints,
};
