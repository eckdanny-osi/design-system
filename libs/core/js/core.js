const Color = require('color');

// Grays
const grays = {
  'gray-100': Color.hsl(0, 0, 96).hex(), // ($ray)
  'gray-200': Color.hsl(0, 0, 91).hex(), // ($grouper)
  'gray-300': Color.hsl(0, 0, 82).hex(), // ($trout)
  'gray-400': Color.hsl(0, 0, 60).hex(), //
  'gray-500': Color.hsl(0, 0, 50).hex(), //
  'gray-600': Color.hsl(0, 0, 40).hex(), //
  'gray-700': Color.hsl(0, 0, 36).hex(), // ($wahoo)
  'gray-800': Color.hsl(0, 0, 20).hex(), //
  'gray-900': Color.hsl(0, 0, 10).hex(), // ($shark)
};

// Theme Colors
const themeColors = {
  primary: Color('#09798e').hex(), // ($aspen)
  secondary: grays['gray-700'], // '$gray-700',
  success: Color('#068347').hex(), // ($elm)
  info: Color('#0d4f78').hex(), // ($spruce)
  warning: Color('#e7740b').hex(), // ($hickory)
  danger: Color('#bb3709').hex(), // ($maple)
  light: grays['gray-100'], // '$gray-100',
  dark: grays['gray-800'], // '$gray-800',
};

module.exports = {
  grays,
  themeColors,
};

// Options
//
// Quickly modify global styling by enabling or disabling optional features.

// $enable-caret:              true !default;
// $enable-rounded:            true !default;
// $enable-shadows:            false !default;
// $enable-gradients:          false !default;
// $enable-transitions:        true !default;
// $enable-hover-media-query:  false !default; // Deprecated, no longer affects any compiled CSS
// $enable-grid-classes:       true !default;
// $enable-print-styles:       true !default;
