// External components
import { Form, Row, InputGroup } from 'react-bootstrap';

// Internal components
import InputTextField from './InputTextField';

// Properties
import IShoppingCartHooks from '../../interfaces/shoppingCart/IShoppingCartHooks';
import IContactInfo from '../../interfaces/checkoutForm/IContactInfo';

// Implementation
function ContactInfo(props: { shoppingCartHooks: IShoppingCartHooks }) {

  // Alias for shopping cart hook properties
  var contactInfo: IContactInfo = props.shoppingCartHooks.contactInfo;
  var validation: IContactInfo = props.shoppingCartHooks.contactInfoValidation;
  var isPurchaseInProgress = props.shoppingCartHooks.isPurchaseInProgress;

  // ============================================================
  const updateFirstName = (e: any) => {
    var newFirstName = e.target.value;
    if (contactInfo.firstName !== newFirstName) {
      var newContactInfo = {...contactInfo};
      newContactInfo.firstName = newFirstName;
      props.shoppingCartHooks.updateContactInfo(newContactInfo);
    }
  };
  const updateLastName = (e: any) => {
    var newLastName = e.target.value;
    if (contactInfo.lastName !== newLastName) {
      var newContactInfo = {...contactInfo};
      newContactInfo.lastName = newLastName;
      props.shoppingCartHooks.updateContactInfo(newContactInfo);
    }
  };
  const updateAddress = (e: any) => {
    var newAddress = e.target.value;
    if (contactInfo.streetAddress !== newAddress) {
      var newContactInfo = {...props.shoppingCartHooks.contactInfo};
      newContactInfo.streetAddress = newAddress;
      props.shoppingCartHooks.updateContactInfo(newContactInfo);
    }
  };

  // ============================================================
  return (
    <Form noValidate validated={false}>
      <Row className="mb-1">
        <h5>Purchaser Details</h5>
      </Row>
      <Row>
        <Form.Group className="mb-2" controlId="formGroupName">
          <Form.Label>Purchaser Name</Form.Label>
          <InputGroup>
            <InputTextField
              type="firstName"
              value={contactInfo.firstName}
              placeholder="First Name"
              onChange={updateFirstName}
              isDisabled={isPurchaseInProgress}
              validationMessage={validation.firstName}
            />
            <InputTextField
              type="lastName"
              value={contactInfo.lastName}
              placeholder="Last Name"
              onChange={updateLastName}
              isDisabled={isPurchaseInProgress}
              validationMessage={validation.lastName}
            />
          </InputGroup>
        </Form.Group>
      </Row>
      <Row>
        <Form.Group className="mb-2" controlId="formGroupAddress">
          <Form.Label>Purchaser Address</Form.Label>
          <InputGroup>
            <InputTextField
              type="streetAddress"
              value={contactInfo.streetAddress}
              placeholder="Address"
              onChange={updateAddress}
              isDisabled={isPurchaseInProgress}
              validationMessage={validation.streetAddress}
            />
          </InputGroup>
        </Form.Group>
      </Row>
    </Form>
  );
}

export default ContactInfo;
