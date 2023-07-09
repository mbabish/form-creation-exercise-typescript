// External components
import { ListGroup } from 'react-bootstrap';

// Internal components
import TicketListItem from './TicketListItem';

// Props
import ITicketTypeProps from '../../interfaces/ticketDetails/ITicketTypeProps';
import IShoppingCartHooks from '../../interfaces/shoppingCart/IShoppingCartHooks';
import IBandProps from '../../interfaces/IBandProps';

// Implementation
function TicketList (props: { band: IBandProps, ticketTypes: Array<ITicketTypeProps>, shoppingCartHooks: IShoppingCartHooks }) {
  return (
    <ListGroup>
      { props.ticketTypes.map((ticketType) => <TicketListItem band={props.band} ticketType={ticketType} shoppingCartHooks={props.shoppingCartHooks} />) }
    </ListGroup>
  );
}

export default TicketList;
