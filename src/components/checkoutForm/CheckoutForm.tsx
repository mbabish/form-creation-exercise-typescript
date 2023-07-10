// CSS
import './CheckoutForm.css';

// External components
import { Stack } from 'react-bootstrap';

// Internal components
import ContactInfo from './ContactInfo';
import CreditCardInfo from './CreditCardInfo';
import PurchaseButton from './PurchaseButton';

// Properties
import IShoppingCartHooks from '../../interfaces/shoppingCart/IShoppingCartHooks';

// Implementation
function CheckoutForm(props: { shoppingCartHooks: IShoppingCartHooks }) {
  return (
    <Stack gap={1}>
      <ContactInfo shoppingCartHooks={props.shoppingCartHooks} />
      <CreditCardInfo shoppingCartHooks={props.shoppingCartHooks} />
      <PurchaseButton shoppingCartHooks={props.shoppingCartHooks} />
    </Stack>
  );
}

export default CheckoutForm;
