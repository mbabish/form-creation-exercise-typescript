// External components
import { ListGroup } from 'react-bootstrap';

// Internal components
import TotalCost from './TotalCost';
import ContactInfo from './ContactInfo';
import CreditCardInfo from './CreditCardInfo';

// Implementation
function CheckoutForm(props: { totalCost: { cost: number } }) {
  return (
    <ListGroup>
      <ListGroup.Item>
        <TotalCost totalCost={props.totalCost.cost} />
      </ListGroup.Item>
      <ListGroup.Item>
        <ContactInfo />
        <CreditCardInfo />
      </ListGroup.Item>
    </ListGroup>
  );
}

export default CheckoutForm;
