import ICreditCardInfo from "./ICreditCardInfo";

const DefaultCreditCardInfo = () => {
  return {
    cardNumber: '',
    expirationMonth: '',
    expirationYear: '',
    CVV: ''
  } as ICreditCardInfo;
}

export default DefaultCreditCardInfo;