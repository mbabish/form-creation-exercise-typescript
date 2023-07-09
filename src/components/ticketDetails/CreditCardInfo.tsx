// External components
import { Form, Row, Col, InputGroup, FloatingLabel } from 'react-bootstrap';

// Properties
import IShoppingCartHooks from "../../interfaces/shoppingCart/IShoppingCartHooks";
import ICreditCardInfo from "../../interfaces/shoppingCart/ICreditCardInfo";

// Implementation
function CreditCardInfo(props: { shoppingCartHooks: IShoppingCartHooks }) {

  // Alias for shopping cart hook properties
  var creditCardInfo: ICreditCardInfo = props.shoppingCartHooks.creditCardInfo;
  var isPurchaseInProgress = props.shoppingCartHooks.isPurchaseInProgress;

  // Credit Card Info
  const updateCardNumber = (e: any) => {
    var newCardNumber = e.target.value;
    if (creditCardInfo.cardNumber !== newCardNumber) {
      var newCreditCardInfo = {...creditCardInfo};
      newCreditCardInfo.cardNumber = newCardNumber;
      props.shoppingCartHooks.setCreditCardInfo(newCreditCardInfo);
    }
  };
  const updateExpirationMonth = (e: any) => {
    var newExpirationMonth = e.target.value;
    if (creditCardInfo.expirationMonth !== newExpirationMonth) {
      var newCreditCardInfo = {...creditCardInfo};
      newCreditCardInfo.expirationMonth = newExpirationMonth;
      props.shoppingCartHooks.setCreditCardInfo(newCreditCardInfo);
    }
  };
  const updateExpirationYear = (e: any) => {
    var newExpirationYear = e.target.value;
    if (creditCardInfo.expirationYear !== newExpirationYear) {
      var newCreditCardInfo = {...creditCardInfo};
      newCreditCardInfo.expirationYear = newExpirationYear;
      props.shoppingCartHooks.setCreditCardInfo(newCreditCardInfo);
    }
  };
  const updateCVV = (e: any) => {
    var newCVV = e.target.value;
    if (creditCardInfo.CVV !== newCVV) {
      var newCreditCardInfo = {...creditCardInfo};
      newCreditCardInfo.CVV = newCVV;
      props.shoppingCartHooks.setCreditCardInfo(newCreditCardInfo);
    }
  };

  return (
    <Form>
      <Row className="mb-1">
        <h5>Payment Details</h5>
      </Row>
      <Row>
        <Form.Group className="mb-2" controlId="formGroupCreditCard">
          <Form.Label>Credit Card Number</Form.Label>
          <FloatingLabel controlId="floatingCreditCard" label="#### #### #### ####">
            <Form.Control type="text" placeholder="0000 0000 0000 0000" disabled={isPurchaseInProgress} value={creditCardInfo.cardNumber} onChange={updateCardNumber}/>
          </FloatingLabel>
        </Form.Group>
      </Row>
      <Row>
        <Col md={3}>
          <Form.Group className="mb-2" controlId="formGroupExpirationDate">
            <Form.Label>Expiration Date</Form.Label>
            <InputGroup>
              <FloatingLabel controlId="floatingMM" label="MM">
                <Form.Control type="text" placeholder="MM" disabled={isPurchaseInProgress} value={creditCardInfo.expirationMonth} onChange={updateExpirationMonth}/>
              </FloatingLabel>
              <InputGroup.Text>/</InputGroup.Text>
              <FloatingLabel controlId="floatingYY" label="YY">
                <Form.Control type="text" placeholder="YY" disabled={isPurchaseInProgress} value={creditCardInfo.expirationYear} onChange={updateExpirationYear}/>
              </FloatingLabel>
            </InputGroup>
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group className="mb-2" controlId="formGroupCVV">
            <Form.Label>CVV</Form.Label>
            <FloatingLabel controlId="floatingCVV" label="CVV">
              <Form.Control type="text" placeholder="CVV" disabled={isPurchaseInProgress} value={creditCardInfo.CVV} onChange={updateCVV}/>
            </FloatingLabel>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
}

export default CreditCardInfo;
