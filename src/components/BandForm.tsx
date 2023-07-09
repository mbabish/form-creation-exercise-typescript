// External components
import { Stack } from 'react-bootstrap';

// Internal components
import BandDetails from './bandDetails/BandDetails';
import TicketDetails from './ticketDetails/TicketDetails';

// Props
import IBandProps from '../interfaces/IBandProps';

// Implementation
function BandForm(props: { band: IBandProps }) {
  return (
    <Stack direction="horizontal" gap={4}>
      <BandDetails band={props.band} />
      <TicketDetails band={props.band} />
    </Stack>
  );
}

export default BandForm;
