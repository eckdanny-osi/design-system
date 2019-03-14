/* eslint-disable import/no-webpack-loader-syntax,import/no-duplicates */
import AlertModalExample from './AlertModalExample'
import AlertModalExampleSrc from '!raw-loader!./AlertModalExample'
import BasicModalExample from './BasicModalExample'
import BasicModalExampleSrc from '!raw-loader!./BasicModalExample'
import ScrollingModalExample from './ScrollingModalExample'
import ScrollingModalExampleSrc from '!raw-loader!./ScrollingModalExample'
import SizeModalExample, { SizeModalExamples } from './SizeModalExample'
import SizeModalExampleSrc from '!raw-loader!./SizeModalExample'

export {
  AlertModalExample,
  AlertModalExampleSrc,
  BasicModalExample,
  BasicModalExampleSrc,
  ScrollingModalExample,
  ScrollingModalExampleSrc,
  SizeModalExample,
  SizeModalExamples,
  SizeModalExampleSrc,
}
