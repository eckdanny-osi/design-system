// @preval

/**
 * Design System
 *
 * This is the source of truth for design system variable declarations. It is
 * distributed as a javascript module so it may be used in downstream processes
 * such as css-in-js component theming or in sass systems such as Bootstrap 4
 * using LibSass's importer feature.
 *
 * This file is organized consistent with BS _variables.scss.
 *
 * We are using `preval` to evaluate config values at build-time and distribute
 * the Design System (DS) config as simple JSON. This means node-safe syntax
 * only (no esm imports).
 */

const Color = require('color')
const DS = {}

//
// Color system
//

// Colors
DS.colors = {
  white: Color('#ffffff').hex(),
  black: Color('#000000').hex(),
}

// Grays
DS.grays = {
  '100':        Color.hsl(0, 0, 96).hex(),   // ($ray)
  '200':        Color.hsl(0, 0, 91).hex(),   // ($grouper)
  '300':        Color.hsl(0, 0, 82).hex(),   // ($trout)
  '400':        Color.hsl(0, 0, 60).hex(),   //
  '500':        Color.hsl(0, 0, 50).hex(),   //
  '600':        Color.hsl(0, 0, 40).hex(),   //
  '700':        Color.hsl(0, 0, 36).hex(),   // ($wahoo)
  '800':        Color.hsl(0, 0, 20).hex(),   //
  '900':        Color.hsl(0, 0, 10).hex(),   // ($shark)
}

// Theme Colors
DS.themeColors = {
  primary:      Color('#098e88').hex(),   // ($aspen)
  secondary:    DS.colors['white'],       // $white
  accent:       Color('#601974').hex(),   // ($oak)
  breath:       Color('#d8ecf0').hex(),   // ($fir)
  success:      Color('#068347').hex(),   // ($elm)
  info:         Color('#0d4f78').hex(),   // ($spruce)
  warning:      Color('#e7740b').hex(),   // ($hickory)
  danger:       Color('#bb3709').hex(),   // ($maple)
  light:        DS.grays['100'],          // '$gray-100',
  dark:         DS.grays['800'],          // '$gray-800',
}

//
// Options
//

DS.options = {
  // 'enable-caret':           true,
  // 'enable-rounded':         true,
  'enable-shadows':            true,
  // 'enable-gradients':       false,
  // 'enable-transitions':     true,
  // 'enable-grid-classes':    true,
  // 'enable-print-styles':    true,
}

//
// Spacing
//

DS.spacing = {}
DS.spacing.spacerUnit = 'rem'
DS.spacing.spacer = 1 // rem
DS.spacing.spacers = {
  '0': DS.spacing.spacer * 0,
  '1': DS.spacing.spacer * 0.25,
  '2': DS.spacing.spacer * 0.5,
  '3': DS.spacing.spacer * 1,
  '4': DS.spacing.spacer * 1.5,
  '5': DS.spacing.spacer * 3,
}

//
// Grid breakpoints
//

DS.breakpointUnit = 'px'
DS.breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
}

module.exports = DS
