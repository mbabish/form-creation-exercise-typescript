import IContactInfo from "../checkoutForm/IContactInfo";
import ICreditCardInfo from "../checkoutForm/ICreditCardInfo";
import IProduct from "./IProduct";
import IShoppingCart from "./IShoppingCart";

interface IShoppingCartHooks {
  shoppingCart: IShoppingCart,
  contactInfo: IContactInfo,
  creditCardInfo: ICreditCardInfo,
  contactInfoValidation: IContactInfo,
  creditCardInfoValidation: ICreditCardInfo,
  isPurchaseInProgress: boolean,
  purchaseResult: string,
  emptyCart(): any,
  getProductAmount(productType: string): any,
  updateProductAmount(product: IProduct, amount: number): any,
  getTotalCost(): any,
  updateContactInfo: any,
  updateCreditCardInfo: any,
  completePurchase(): any
}
export default IShoppingCartHooks;