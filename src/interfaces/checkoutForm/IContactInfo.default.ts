import IContactInfo from "./IContactInfo";

const DefaultContactInfo = () => {
  return {
    firstName: '',
    lastName: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
  } as IContactInfo ;
}

export default DefaultContactInfo;