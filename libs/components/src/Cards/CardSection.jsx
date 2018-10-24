// import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
// import cn from 'classnames'
// import Collapse from '../Collapse'
// import Icon from '../Icon'
// import CardSubtitle from './CardSubtitle'
// import Subtitle from './CardSubtitle'
// import Styles from './Cards.module.scss'

// class CardSection extends PureComponent {
//   static propTypes = {
//     title: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
//     collapsible: PropTypes.bool,
//   }
//   static defaultProps = {
//     collapsible: false,
//   }
//   state = {}
//   constructor(props) {
//     super(props)
//     if (props.collapsible) {
//       this.state.collapsed = true
//     }
//   }
//   toggleCollapse = e => {
//     e.preventDefault()
//     this.setState({
//       collapsed: !this.state.collapsed,
//     })
//   }
//   renderSectionTitle() {
//     const { title } = this.props
//     return (
//       <div className={Styles.CardSectionTitle}>
//         <a onClick={this.toggleCollapse} href="#section">
//           {'function' === typeof title ? title() : title}
//           <Icon
//             icon="chevronDown"
//             style={{
//               float: 'right',
//               marginRight: '9px',
//               marginTop: '4px',
//             }}
//             rotation={this.state.collapsed ? null : 180}
//           />
//         </a>
//       </div>
//     )
//   }
//   renderSectionBody() {
//     if (!this.props.collapsible) {
//       return this.props.children
//     }
//     return (
//       <Collapse isOpen={!this.state.collapsed}>{this.props.children}</Collapse>
//     )
//   }
//   render() {
//     const { children, title, collapsible } = this.props
//     return (
//       <div
//         className={cn(Styles.CardSection, {
//           [Styles.CardSectionActive]: !this.state.collapsed,
//         })}
//       >
//         {this.renderSectionTitle()}
//         {this.renderSectionBody()}
//       </div>
//     )
//   }
// }

// export default CardSection
