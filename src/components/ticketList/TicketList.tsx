// External components
import { ListGroup } from 'react-bootstrap';

// Internal components
import TicketListItem from './TicketListItem';

// Properties
import ITicketType from '../../interfaces/ticketDetails/ITicketType';
import IShoppingCartHooks from '../../interfaces/shoppingCart/IShoppingCartHooks';
import IBand from '../../interfaces/IBand';

// Implementation
function TicketList (props: { band: IBand, ticketTypes: Array<ITicketType>, shoppingCartHooks: IShoppingCartHooks }) {
  return (
    <ListGroup>
      { props.ticketTypes.map((ticketType) => <TicketListItem band={props.band} ticketType={ticketType} shoppingCartHooks={props.shoppingCartHooks} />) }
    </ListGroup>
  );
}

export default TicketList;
