interface IContactInfo {
  firstName: string;
  lastName: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
}

export default IContactInfo;

const emptyContactInfo: IContactInfo = {
  firstName: '',
  lastName: '',
  streetAddress: '',
  city: '',
  state: '',
  zipCode: '',
};