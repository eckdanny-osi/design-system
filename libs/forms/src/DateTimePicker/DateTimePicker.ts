import Moment from 'moment'
import momentLocalizer from 'react-widgets-moment'
import DateTimePicker from 'react-widgets/lib/DateTimePicker'
import 'react-widgets/lib/scss/react-widgets.scss'

Moment.locale('en')
momentLocalizer()

export default DateTimePicker
