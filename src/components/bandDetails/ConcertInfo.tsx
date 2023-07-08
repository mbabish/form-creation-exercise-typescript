// External libraries
import moment from 'moment';

// External components
import { Alert } from 'react-bootstrap';

// Internal Components
import Icon from '../Icon';

// Props
import IConcertInfoProps from '../../interfaces/IConcertInfoProps';

// Implementation
function ConcertInfo(props: { concert: IConcertInfoProps }) {
  // Format the date string
  var concertDate: string = moment(props.concert.date).format('dddd, MMMM D, YYYY');
  return (
    <>
      <Alert variant="light"><Icon iconName="calendar"/>{ concertDate }</Alert>
      <Alert variant="light"><Icon iconName="location"/>{ props.concert.location }</Alert>
    </>
  );
}

export default ConcertInfo;
