const Color = require('color')

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
}

// Colors
const colors = {
  white: Color('#ffffff').hex(),
  black: Color('#000000').hex(),
}

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
}

// Options
const options = {
  // 'enable-caret': true,
  // 'enable-rounded': true,
  'enable-shadows': true,
  // 'enable-gradients': false,
  // 'enable-transitions': true,
  // 'enable-grid-classes': true,
  // 'enable-print-styles': true,
}

// Spacing
const spacer = 1 // rem
const spacers = {
  'spacer-0': `${spacer * 0}rem`,
  'spacer-1': `${spacer * 0.25}rem`,
  'spacer-2': `${spacer * 0.5}rem`,
  'spacer-3': `${spacer * 1}rem`,
  'spacer-4': `${spacer * 1.5}rem`,
  'spacer-5': `${spacer * 3}rem`,
}

// Breakpoints
const breakpoints = {
  'grid-breakpoint-xs': 0,
  'grid-breakpoint-sm': 576,
  'grid-breakpoint-md': 768,
  'grid-breakpoint-lg': 992,
  'grid-breakpoint-xl': 1200,
}

module.exports = {
  grays,
  colors,
  themeColors,
  spacer: `${spacer}rem`,
  spacers,
  breakpoints,
  options,
}
