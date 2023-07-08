// External libraries
import { useState, useEffect } from "react";
import _ from "lodash";

// External components
import { Container, Row, Col, FloatingLabel, Form, Button } from 'react-bootstrap';

// Implementation
function CreditCardInfo() {
  const [creditCardInfo, setCreditCardInfo] = useState({
    cardNumber: '',
    expirationDate: '',
    CVV: ''
  });

  // Credit Card Info
  const updateCardNumber = (e: any) => {
    var newCardNumber = e.target.value;
    if (creditCardInfo.cardNumber !== newCardNumber) {
      var newCreditCardInfo = _.cloneDeep(creditCardInfo);
      newCreditCardInfo.cardNumber = newCardNumber;
      setCreditCardInfo(newCreditCardInfo);
    }
  };
  const updateExpirationDate = (e: any) => {
    var newExpirationDate = e.target.value;
    if (creditCardInfo.expirationDate !== newExpirationDate) {
      var newCreditCardInfo = _.cloneDeep(creditCardInfo);
      newCreditCardInfo.expirationDate = newExpirationDate;
      setCreditCardInfo(newCreditCardInfo);
    }
  };
  const updateCVV = (e: any) => {
    var newCVV = e.target.value;
    if (creditCardInfo.CVV !== newCVV) {
      var newCreditCardInfo = _.cloneDeep(creditCardInfo);
      newCreditCardInfo.CVV = newCVV;
      setCreditCardInfo(newCreditCardInfo);
    }
  };

  // Purchase Ticket Functionality
  const [isProcessing, setProcessing] = useState(false);
  const [purchaseResult, setPurchaseResult] = useState('');

  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    if (isProcessing) {
      setPurchaseResult("");
      simulateNetworkRequest().then(() => {
        setProcessing(false);
        setPurchaseResult("Purchase successful");
      });
    }
  }, [isProcessing]);


  const purchaseTickets = () => {
    setProcessing(true);
  }

  return (
    <>
      <Container>
        <Row>
          <div className="header">Payment Details</div>
        </Row>
        <Row>
          <Col>
            <FloatingLabel controlId="floatingCardNumber" label="Card Number" className="mb-3">
              <Form.Control type="text" placeholder="0000 0000 0000 0000" disabled={isProcessing} value={creditCardInfo.cardNumber} onChange={updateCardNumber}/>
            </FloatingLabel>
          </Col>
        </Row>
        <Row>
          <Col xs lg="2">
            <FloatingLabel controlId="floatingExpirationMonth" label="Month" className="mb-3">
              <Form.Control type="text" placeholder="MM" disabled={isProcessing} value={creditCardInfo.expirationDate} onChange={updateExpirationDate}/>
            </FloatingLabel>
          </Col>
          <Col xs lg="2">
            <FloatingLabel controlId="floatingExpirationYear" label="Year" className="mb-3">
              <Form.Control type="text" placeholder="MM" disabled={isProcessing} value={creditCardInfo.expirationDate} onChange={updateExpirationDate}/>
            </FloatingLabel>
          </Col>
          <Col xs lg="2">
            <FloatingLabel controlId="floatingCVV" label="CVV" className="mb-3">
              <Form.Control type="text" placeholder="CVV" disabled={isProcessing} value={creditCardInfo.CVV} onChange={updateCVV}/>
            </FloatingLabel>
          </Col>
        </Row>
        <Row>
          <Col xs lg="4">
            <div className="d-grid gap-2">
              <Button variant="primary" size="lg" disabled={isProcessing} onClick={!isProcessing ? purchaseTickets : undefined}>Get Tickets</Button>
            </div>
          </Col>
          <Col>
            <div className="header">{purchaseResult}</div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CreditCardInfo;
