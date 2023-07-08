// External components
import { Container, Row, Col } from 'react-bootstrap';

// Internal components
import TicketList from './TicketList';
import CheckoutForm from './CheckoutForm';

// Internal hooks
import useShoppingCart from "../../hooks/useShoppingCart";

// Props
import IBandProps from '../../interfaces/IBandProps';

// Implementation
function TicketDetails(props: { band: IBandProps }) {
  const { shoppingCart, setBand, updateTicketAmount, getTotalCost } = useShoppingCart(props.band.ticketTypes);

  setBand(props.band.id);

  return (
    <Container>
      <Row>
        <Col>
          <h2>Select Tickets</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <TicketList ticketTypes={props.band.ticketTypes} shoppingCart={shoppingCart} updateTicketAmount={updateTicketAmount}/>
          <br/>
          <CheckoutForm totalCost={getTotalCost()}/>
        </Col>
      </Row>
    </Container>
  );
};

export default TicketDetails;
