// External libraries
import currencyFormatter from "../../helpers/currencyFormatter";

// External components
import { Container, Row, Col } from 'react-bootstrap';

// Props
import ITicketTypeProps from '../../interfaces/ITicketTypeProps';

// Implementation
function TicketInfo(props: { ticket: ITicketTypeProps, shoppingCart: any, updateTicketAmount: any }) {

  const getNumberOfTickets = () => {
    return (
      props.shoppingCart
      && props.shoppingCart.tickets
      && props.shoppingCart.tickets.get(props.ticket.type)
    ) ? props.shoppingCart.tickets.get(props.ticket.type).number : 0;
  }

  const onValueChanged = (e: any) => {
    var newTicketNumber = e.target.value;
    props.updateTicketAmount(props.ticket.type, props.ticket.cost, newTicketNumber);
  }

  return (
    <Container>
      <Row>
        <Col>
        <h4>{props.ticket.name}</h4>
        <div>{props.ticket.description}</div>
        <div>{currencyFormatter.format(props.ticket.cost / 100)}</div>
        </Col>
        <Col xs lg="2">
          <input type="number" min="0" className="form-control" value={getNumberOfTickets()} onChange={onValueChanged}/>
        </Col>
      </Row>
    </Container>
  );
}

export default TicketInfo;
