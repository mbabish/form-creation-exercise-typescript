import IContactInfo from "./IContactInfo";
import ICreditCardInfo from "./ICreditCardInfo";
import IProduct from "./IProduct";
import IShoppingCart from "./IShoppingCart";

interface IShoppingCartHooks {
  shoppingCart: IShoppingCart,
  contactInfo: IContactInfo,
  creditCardInfo: ICreditCardInfo,
  isPurchaseInProgress: boolean,
  purchaseResult: string,
  emptyCart(): any,
  getProductAmount(productType: string): any,
  updateProductAmount(product: IProduct, amount: number): any,
  getTotalCost(): any,
  setContactInfo: React.Dispatch<React.SetStateAction<IContactInfo>>,
  setCreditCardInfo: React.Dispatch<React.SetStateAction<ICreditCardInfo>>,
  completePurchase(): any
}
export default IShoppingCartHooks;