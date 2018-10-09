import * as React from 'react';

export interface ILink {
  title: string;
  slug?: string;
  active?: boolean;
  component: Function;
  children?: Array<ILink>;
}

export interface AnchorNavProps {
  items: Array<ILink>;
  collapsible: boolean;
  renderLink: Function;
}

declare class AnchorNav extends React.Component<AnchorNavProps, any> {}

export default AnchorNav;
