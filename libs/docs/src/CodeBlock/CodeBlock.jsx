import React from 'react'
import set from 'lodash.set'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import tomorrow from 'react-syntax-highlighter/dist/styles/prism/tomorrow'

const customStyle = set(
  tomorrow,
  ['pre[class*="language-"]', 'borderRadius'],
  'none'
)

const CodeBlock = props => <SyntaxHighlighter {...props} style={customStyle} />
CodeBlock.defaultProps = {
  language: 'jsx',
}

export default CodeBlock
