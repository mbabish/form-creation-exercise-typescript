import IContactInfo from "../interfaces/checkoutForm/IContactInfo";
import validateRequiredField from "./validateRequiredField";

const validateContactInfo = (contactInfo: IContactInfo) => {

  var validation: IContactInfo = {
    firstName: validateRequiredField(contactInfo.firstName),
    lastName: validateRequiredField(contactInfo.lastName),
    streetAddress: validateRequiredField(contactInfo.streetAddress),
    city: "",
    state: "",
    zipCode: ""
  }

  var isValid = validation.firstName === ""
    && validation.lastName === ""
    && validation.streetAddress === "";

  return {
    isValid: isValid,
    validation: validation
  }
};

export default validateContactInfo;
