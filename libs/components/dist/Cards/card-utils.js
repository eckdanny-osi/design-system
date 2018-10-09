import React from 'react';
import Body from './CardBody';
import Footer from './CardFooter';
import Header from './CardHeader';
/**
 * Is composed of card structural subcomponents?
 * @returns boolean
 */

export function hasCardComponentStructure(children) {
  const CardStructureComponents = [Header, Body, Footer];
  return React.Children.toArray(children).every(child => CardStructureComponents.includes(child.type));
}
/**
 * Find structured child
 */

export function findChildCardStructure(children, component) {
  return React.Children.toArray(children).find(({
    type
  }) => component === type) || null;
}