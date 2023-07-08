// External components
import { Container, Row, Col } from 'react-bootstrap';

// Internal components
import BandDetails from './bandDetails/BandDetails';
import TicketDetails from './ticketDetails/TicketDetails';

// Props
import IBandProps from '../interfaces/IBandProps';

// Implementation
function BandForm(props: { band: IBandProps }) {
  return (
    <Container>
      <Row>
        <Col>
          <BandDetails band={props.band} />
        </Col>
        <Col xs lg="8">
          <TicketDetails band={props.band} />
        </Col>
      </Row>
    </Container>
  );
}

export default BandForm;
