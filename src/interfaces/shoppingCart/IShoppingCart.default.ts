import ICartItem from "./ICartItem";
import IShoppingCart from "./IShoppingCart";

const DefaultShoppingCart = () => {
    return {
        items: new Map<string, ICartItem>()
    } as IShoppingCart;
}

export default DefaultShoppingCart;