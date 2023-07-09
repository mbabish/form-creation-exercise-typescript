// External libraries
import moment from 'moment';

// External components
import { ListGroup, Stack } from 'react-bootstrap';

// Internal Components
import Icon from '../Icon';

// Props
import IConcertInfoProps from '../../interfaces/bandDetails/IConcertInfoProps';

// Implementation
function ConcertInfo(props: { concert: IConcertInfoProps }) {
  // Format the date string
  var concertDate: string = moment(props.concert.date).format('dddd, MMMM D, YYYY');
  return (
    <ListGroup>
      <ListGroup.Item>
        <Stack direction="horizontal"><Icon iconName="calendar"/>{ concertDate }</Stack>
      </ListGroup.Item>
      <ListGroup.Item>
        <Stack direction="horizontal"><Icon iconName="location"/>{ props.concert.location }</Stack>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default ConcertInfo;
