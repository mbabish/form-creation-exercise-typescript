// External components
import { Form, Row, Col } from 'react-bootstrap';

// Properties
import IShoppingCartHooks from '../../interfaces/shoppingCart/IShoppingCartHooks';
import ICreditCardInfo from '../../interfaces/checkoutForm/ICreditCardInfo';
import InputTextField from './InputTextField';

// Implementation
function CreditCardInfo(props: { shoppingCartHooks: IShoppingCartHooks }) {

  // Alias for shopping cart hook properties
  var creditCardInfo: ICreditCardInfo = props.shoppingCartHooks.creditCardInfo;
  var validation: ICreditCardInfo = props.shoppingCartHooks.creditCardInfoValidation;
  var isPurchaseInProgress = props.shoppingCartHooks.isPurchaseInProgress;

  // Credit Card Info
  const updateCardNumber = (e: any) => {
    var newCardNumber = e.target.value;
    if (creditCardInfo.cardNumber !== newCardNumber) {
      var newCreditCardInfo = {...creditCardInfo};
      newCreditCardInfo.cardNumber = newCardNumber;
      props.shoppingCartHooks.updateCreditCardInfo(newCreditCardInfo);
    }
  };
  const updateExpirationDate = (e: any) => {
    var newExpirationDate = e.target.value;
    if (creditCardInfo.expirationDate !== newExpirationDate) {
      var newCreditCardInfo = {...creditCardInfo};
      newCreditCardInfo.expirationDate = newExpirationDate;
      props.shoppingCartHooks.updateCreditCardInfo(newCreditCardInfo);
    }
  };
  const updateCVV = (e: any) => {
    var newCVV = e.target.value;
    if (creditCardInfo.CVV !== newCVV) {
      var newCreditCardInfo = {...creditCardInfo};
      newCreditCardInfo.CVV = newCVV;
      props.shoppingCartHooks.updateCreditCardInfo(newCreditCardInfo);
    }
  };

  return (
    <Form noValidate>
      <Row className="mb-1">
        <h5>Payment Details</h5>
      </Row>
      <Row>
        <Form.Group className="mb-2" controlId="formGroupCreditCard">
          <Form.Label>Credit Card Number</Form.Label>
          <InputTextField
              type="creditCardNumber"
              value={creditCardInfo.cardNumber}
              placeholder="#### #### #### ####"
              onChange={updateCardNumber}
              isDisabled={isPurchaseInProgress}
              validationMessage={validation.cardNumber}
            />
        </Form.Group>
      </Row>
      <Row>
        <Col md={3}>
          <Form.Group className="mb-2" controlId="formGroupExpirationDate">
            <Form.Label>Expiration Date</Form.Label>
            <InputTextField
              type="expirationDate"
              value={creditCardInfo.expirationDate}
              placeholder="MM/YY"
              onChange={updateExpirationDate}
              isDisabled={isPurchaseInProgress}
              validationMessage={validation.expirationDate}
            />
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group className="mb-2" controlId="formGroupCVV">
            <Form.Label>Security Code</Form.Label>
            <InputTextField
              type="securityCode"
              value={creditCardInfo.CVV}
              placeholder="CVV"
              onChange={updateCVV}
              isDisabled={isPurchaseInProgress}
              validationMessage={validation.CVV}
            />
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
}

export default CreditCardInfo;
