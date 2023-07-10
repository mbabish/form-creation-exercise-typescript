// External components
import { Stack } from 'react-bootstrap';

// Internal components
import BandInfo from './BandInfo';
import ConcertInfo from './ConcertInfo';

// Properties
import IBandDetails from '../../interfaces/bandDetails/IBandDetails';

// Implementation
function BandDetails(props: { band: IBandDetails }) {
  return (
    <Stack gap={3} className="col-md-4">
      <h2>{props.band.name}</h2>
      <ConcertInfo concert={props.band} />
      <BandInfo band={props.band} />
    </Stack>
  );
}

export default BandDetails;
