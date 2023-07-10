import ICreditCardInfo from "./ICreditCardInfo";

const DefaultCreditCardInfo = () => {
  return {
    cardNumber: '',
    expirationDate: '',
    CVV: ''
  } as ICreditCardInfo;
}

export default DefaultCreditCardInfo;