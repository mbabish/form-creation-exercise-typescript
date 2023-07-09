import ICartItem from "./ICartItem";

interface IShoppingCart {
  items: Map<string, ICartItem>;
}

export default IShoppingCart;