// Internal libraries
import currencyFormatter from "../../helpers/currencyFormatter";

// External components
import { Container, Row, Col } from 'react-bootstrap';

// Implementation
function TotalCost(props : { totalCost: number }) {
  return (
    <Container>
      <Row>
        <Col>
          <h4 className='header'>TOTAL</h4>
        </Col>
        <Col xs lg="2">
          <input type="text" min="0" className="form-control" value={currencyFormatter.format(props.totalCost / 100)} readOnly/>
        </Col>
      </Row>
    </Container>
  );
}

export default TotalCost;
