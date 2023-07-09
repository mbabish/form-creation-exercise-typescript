// External components
import { ListGroup } from 'react-bootstrap';

// Internal components
import TicketInfo from './TicketInfo';

// Props
import ITicketTypeProps from '../../interfaces/ticketDetails/ITicketTypeProps';
import IShoppingCartHooks from '../../interfaces/shoppingCart/IShoppingCartHooks';
import IBandDetailsProps from '../../interfaces/bandDetails/IBandDetailsProps';

// Implementation
function TicketListItem (props : { band: IBandDetailsProps, ticketType: ITicketTypeProps, shoppingCartHooks: IShoppingCartHooks }) {
  var productType: string = props.band.id + '.' + props.ticketType.type;
  var productName: string = props.band.name + ': ' + props.ticketType.name;
  return (
    <ListGroup.Item key={productType}>
      <TicketInfo productType={productType} productName={productName} ticket={props.ticketType} shoppingCartHooks={props.shoppingCartHooks} />
    </ListGroup.Item>
  )
}

export default TicketListItem;
