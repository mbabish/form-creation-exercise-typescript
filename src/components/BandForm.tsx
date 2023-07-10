// External components
import { Stack } from 'react-bootstrap';

// Internal components
import BandDetails from './bandDetails/BandDetails';
import TicketDetails from './ticketDetails/TicketDetails';

// Properties
import IBand from '../interfaces/IBand';

// Implementation
function BandForm(props: { band: IBand }) {
  return (
    <Stack direction="horizontal" gap={4}>
      <BandDetails band={props.band} />
      <TicketDetails band={props.band} />
    </Stack>
  );
}

export default BandForm;
