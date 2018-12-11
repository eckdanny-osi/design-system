import React from 'react'
import set from 'lodash.set'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { xonokai } from 'react-syntax-highlighter/styles/prism'
import AnchorLink from './AnchorLink'

const codeSnippetStyle = set(
  xonokai,
  ['pre[class*="language-"]', 'borderRadius'],
  'none'
)

const getLanguage = (classNames, RE = /^language-/) =>
  classNames
    .split(/\s/)
    .find(className => RE.test(className))
    .replace(RE, '')

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
        language={getLanguage(code.props.props.className)}
        style={codeSnippetStyle}
      >
        {code.props.children}
      </SyntaxHighlighter>
    )
  },
}
