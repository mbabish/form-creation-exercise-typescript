// External components
import { ListGroup } from 'react-bootstrap';

// Internal components
import TicketInfo from './TicketInfo';

// Props
import ITicketTypeProps from '../../interfaces/ITicketTypeProps';

// Implementation
function TicketList (props: { ticketTypes: Array<ITicketTypeProps>, shoppingCart: any, updateTicketAmount: any }) {
  return (
    <ListGroup>
      {props.ticketTypes.map((ticket) => (
        <ListGroup.Item key={ticket.type}>
          <TicketInfo ticket={ticket} shoppingCart={props.shoppingCart} updateTicketAmount={props.updateTicketAmount} />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default TicketList;
