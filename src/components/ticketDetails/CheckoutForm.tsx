// CSS
import './CheckoutForm.css';

// External components
import { Stack } from 'react-bootstrap';

// Internal components
import ContactInfo from './ContactInfo';
import CreditCardInfo from './CreditCardInfo';

// Props
import IShoppingCartHooks from '../../interfaces/shoppingCart/IShoppingCartHooks';
import PurchaseButton from './PurchaseButton';

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
