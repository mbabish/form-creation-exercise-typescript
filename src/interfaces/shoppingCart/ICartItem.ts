import IProduct from "./IProduct";

interface ICartItem {
  product: IProduct
  amount: number // the number of this item in the cart
}

export default ICartItem;