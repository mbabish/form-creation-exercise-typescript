// External components
import { ListGroup } from 'react-bootstrap';

// Internal components
import TicketInfo from './TicketInfo';

// Properties
import ITicketType from '../../interfaces/ticketDetails/ITicketType';
import IShoppingCartHooks from '../../interfaces/shoppingCart/IShoppingCartHooks';
import IBandDetails from '../../interfaces/bandDetails/IBandDetails';

// Implementation
function TicketListItem (props : { band: IBandDetails, ticketType: ITicketType, shoppingCartHooks: IShoppingCartHooks }) {
  var productType: string = props.band.id + '.' + props.ticketType.type;
  var productName: string = props.band.name + ': ' + props.ticketType.name;
  return (
    <ListGroup.Item key={productType}>
      <TicketInfo productType={productType} productName={productName} ticket={props.ticketType} shoppingCartHooks={props.shoppingCartHooks} />
    </ListGroup.Item>
  )
}

export default TicketListItem;
