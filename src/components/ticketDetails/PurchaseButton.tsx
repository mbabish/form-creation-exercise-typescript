// External libraries
// External components
import { Stack, Button, Spinner } from 'react-bootstrap';
import IShoppingCartHooks from "../../interfaces/shoppingCart/IShoppingCartHooks";

// Implementation
function PurchaseButton(props: { shoppingCartHooks: IShoppingCartHooks }) {

  // Alias for shopping cart hook properties
  var isPurchaseInProgress = props.shoppingCartHooks.isPurchaseInProgress;
  var purchaseResult = props.shoppingCartHooks.purchaseResult;

  var onClickFunction = !isPurchaseInProgress ? props.shoppingCartHooks.completePurchase : undefined;

  return (
    <Stack direction="horizontal">
      <Button variant="primary" size="lg" className="col-md-3" disabled={isPurchaseInProgress} onClick={onClickFunction}>Get Tickets</Button>
      <div className="checkoutHeader">
        {isPurchaseInProgress && <Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner>}
        {purchaseResult}
      </div>
    </Stack>
  );
}

export default PurchaseButton;
