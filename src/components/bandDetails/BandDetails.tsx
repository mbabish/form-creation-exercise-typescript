// External components
import { Container, Row, Col } from 'react-bootstrap';

// Internal components
import BandInfo from './BandInfo';
import ConcertInfo from './ConcertInfo';

// Props
import IBandDetailsProps from '../../interfaces/IBandDetailsProps';

// Implementation
function BandDetails(props: { band: IBandDetailsProps }) {
  return (
    <Container>
      <Row>
        <Col>
          <h2>{props.band.name}</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <ConcertInfo concert={props.band} />
        </Col>
      </Row>
      <Row>
        <Col>
          <BandInfo band={props.band} />
        </Col>
      </Row>
    </Container>
  );
}

export default BandDetails;
