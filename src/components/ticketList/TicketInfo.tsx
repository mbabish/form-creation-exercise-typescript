// External libraries
import currencyFormatter from "../../helpers/currencyFormatter";

// External components
import { Stack } from 'react-bootstrap';

// Properties
import ITicketType from '../../interfaces/ticketDetails/ITicketType';
import IShoppingCartHooks from "../../interfaces/shoppingCart/IShoppingCartHooks";
import IProduct from "../../interfaces/shoppingCart/IProduct";

// Implementation
function TicketInfo(props: { productType: string, productName: string, ticket: ITicketType, shoppingCartHooks: IShoppingCartHooks }) {

  // Alias for shopping cart hook properties
  var isPurchaseInProgress = props.shoppingCartHooks.isPurchaseInProgress;

  var product: IProduct = {
    type: props.productType,
    name: props.productName,
    description: props.ticket.description,
    cost: props.ticket.cost

  }

  const getNumberOfTickets = () => {
    return props.shoppingCartHooks ? props.shoppingCartHooks.getProductAmount(product.type) : 0;
  }

  const onValueChanged = (e: any) => {
    var newTicketNumber = e.target.value;
    props.shoppingCartHooks.updateProductAmount(product, newTicketNumber);
  }

  return (
    <Stack>
      <Stack direction="horizontal">
        <h4 className="col-md-10 mb-3">{props.ticket.name}</h4>
        <input type="number" min="0" className="form-control mb-3" disabled={isPurchaseInProgress} value={getNumberOfTickets()} onChange={onValueChanged}/>
      </Stack>
      <div className="mb-2">{props.ticket.description}</div>
      <div className="mb-2">{currencyFormatter.format(product.cost / 100)}</div>
    </Stack>
  );
}

export default TicketInfo;
