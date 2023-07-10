// External libraries
import moment from 'moment';

// External components
import { ListGroup, Stack } from 'react-bootstrap';

// Internal Components
import Icon from '../Icon';

// Properties
import IConcertInfo from '../../interfaces/bandDetails/IConcertInfo';

// Implementation
function ConcertInfo(props: { concert: IConcertInfo }) {
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
