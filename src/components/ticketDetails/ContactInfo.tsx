// External components
import { Form, Row, InputGroup, FloatingLabel } from 'react-bootstrap';
import IShoppingCartHooks from "../../interfaces/shoppingCart/IShoppingCartHooks";
import IContactInfo from "../../interfaces/shoppingCart/IContactInfo";

// Implementation
function ContactInfo(props: { shoppingCartHooks: IShoppingCartHooks }) {

  // Alias for shopping cart hook properties
  var contactInfo: IContactInfo = props.shoppingCartHooks.contactInfo;
  var isPurchaseInProgress = props.shoppingCartHooks.isPurchaseInProgress;

  const updateFirstName = (e: any) => {
    var newFirstName = e.target.value;
    if (contactInfo.firstName !== newFirstName) {
      var newContactInfo = {...contactInfo};
      newContactInfo.firstName = newFirstName;
      props.shoppingCartHooks.setContactInfo(newContactInfo);
    }
  };
  const updateLastName = (e: any) => {
    var newLastName = e.target.value;
    if (contactInfo.lastName !== newLastName) {
      var newContactInfo = {...contactInfo};
      newContactInfo.lastName = newLastName;
      props.shoppingCartHooks.setContactInfo(newContactInfo);
    }
  };
  const updateAddress = (e: any) => {
    var newAddress = e.target.value;
    if (contactInfo.streetAddress !== newAddress) {
      var newContactInfo = {...props.shoppingCartHooks.contactInfo};
      newContactInfo.streetAddress = newAddress;
      props.shoppingCartHooks.setContactInfo(newContactInfo);
    }
  };

  return (
    <Form>
      <Row className="mb-1">
        <h5>Purchaser Details</h5>
      </Row>
      <Row>
        <Form.Group className="mb-2" controlId="formGroupName">
          <Form.Label>Purchaser Name</Form.Label>
          <InputGroup>
            <FloatingLabel controlId="floatingFirstname" label="First Name">
              <Form.Control type="text" placeholder="First Name" disabled={isPurchaseInProgress} value={contactInfo.firstName} onChange={updateFirstName}/>
            </FloatingLabel>
            <FloatingLabel controlId="floatingLastname" label="Last Name">
              <Form.Control type="text" placeholder="Last Name" disabled={isPurchaseInProgress} value={contactInfo.lastName} onChange={updateLastName}/>
            </FloatingLabel>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row>
        <Form.Group className="mb-2" controlId="formGroupAddress">
          <Form.Label>Purchaser Address</Form.Label>
          <InputGroup>
            <FloatingLabel controlId="floatingAddress" label="Address" className="mb-1">
              <Form.Control type="text" placeholder="Address" disabled={isPurchaseInProgress} value={contactInfo.streetAddress} onChange={updateAddress}/>
            </FloatingLabel>
          </InputGroup>
        </Form.Group>
      </Row>
    </Form>
  );
}

export default ContactInfo;
