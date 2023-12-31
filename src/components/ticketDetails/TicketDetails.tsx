// External components
import { Stack, Accordion } from 'react-bootstrap';

// Internal components
import TicketList from '../ticketList/TicketList';
import TotalCost from './TotalCost';
import ShoppingCartTable from '../shoppingCart/ShoppingCartTable';
import CheckoutForm from '../checkoutForm/CheckoutForm';

// Internal hooks
import useShoppingCart from "../../hooks/useShoppingCart";

// Properties
import IBand from '../../interfaces/IBand';
import IShoppingCartHooks from '../../interfaces/shoppingCart/IShoppingCartHooks';

// Implementation
function TicketDetails(props: { band: IBand }) {

  // Initialize the shopping cart
  /* NOTE:
  In this implementation, the cart does not empty when the band changes.
  We could move the shopping cart up into the App level and call shoppingCartHooks.emptyCart() whenever a new band in selected.
  Alternatively, we could track the currently displayed band and call emptyCart() when the band changes
  */
  const shoppingCartHooks: IShoppingCartHooks = useShoppingCart();

  return (
    <Stack gap={3} className="col-md-8">
      <h2>Purchase Tickets</h2>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h4 className="col-md-10">Select Tickets</h4>
          </Accordion.Header>
          <Accordion.Body>
            <TicketList band={props.band} ticketTypes={props.band.ticketTypes} shoppingCartHooks={shoppingCartHooks}/>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <TotalCost totalCost={ shoppingCartHooks.getTotalCost() } />
          </Accordion.Header>
          <Accordion.Body>
            <ShoppingCartTable shoppingCartHooks={shoppingCartHooks}/>
          </Accordion.Body>
        </Accordion.Item>
        { shoppingCartHooks.getTotalCost() > 0 &&
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <h4 className="col-md-10">Checkout</h4>
            </Accordion.Header>
            <Accordion.Body>
              <CheckoutForm shoppingCartHooks={shoppingCartHooks}/>
            </Accordion.Body>
          </Accordion.Item>
        }
      </Accordion>
      { shoppingCartHooks.purchaseResult && (shoppingCartHooks.purchaseResult !== "") &&
      <div className="checkoutHeader">
        {shoppingCartHooks.purchaseResult}
      </div>
      }
    </Stack>
  );
};

export default TicketDetails;
