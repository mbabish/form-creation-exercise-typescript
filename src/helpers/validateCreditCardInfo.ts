import ICreditCardInfo from "../interfaces/checkoutForm/ICreditCardInfo";
import validateRegexField from "./validateRegexField";
import validateRequiredField from "./validateRequiredField";

const validateCreditCardInfo = (creditCardInfo: ICreditCardInfo) => {

  var validation: ICreditCardInfo = {
    cardNumber: validateRequiredField(creditCardInfo.cardNumber),
    expirationDate: validateRequiredField(creditCardInfo.expirationDate),
    CVV: validateRequiredField(creditCardInfo.CVV)
  }

  if (validation.cardNumber === "") {
    validation.cardNumber = validateRegexField(creditCardInfo.cardNumber, "^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$", "#### #### #### ####");
  }
  if (validation.expirationDate === "") {
    validation.expirationDate = validateRegexField(creditCardInfo.expirationDate, "^(0[1-9]|1[0-2])/{1}([0-9]{2})$", "MM/YY");
  }
  if (validation.CVV === "") {
    validation.CVV = validateRegexField(creditCardInfo.CVV, "^[0-9]{3,4}$", "### or ####");
  }

  var isValid = validation.cardNumber === ""
    && validation.expirationDate === ""
    && validation.CVV === "";

  return {
    isValid: isValid,
    validation: validation
  }
};

export default validateCreditCardInfo;
