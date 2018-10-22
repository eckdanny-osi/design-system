import React from 'react'
import AnchorLink from './AnchorLink'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { xonokai } from 'react-syntax-highlighter/styles/prism'

export default {
  h1: props => <AnchorLink {...props} tag="h1" />,
  h2: props => <AnchorLink {...props} tag="h2" />,
  h3: props => <AnchorLink {...props} tag="h3" />,
  h4: props => <AnchorLink {...props} tag="h4" />,
  pre: props => {
    let code
    try {
      code = React.Children.only(props.children)
    } catch (err) {
      return <pre {...props} />
    }
    return (
      <SyntaxHighlighter
        language={code.props.props.className.slice(9)}
        style={xonokai}
        children={code.props.children}
      />
    )
  },
}
